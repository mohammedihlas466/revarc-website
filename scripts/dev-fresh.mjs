/**
 * Stops stale Next dev on port 3000, clears .next, starts a clean dev server.
 * Run: npm run dev:fresh
 */
import { execSync, spawn } from "node:child_process";
import { existsSync, rmSync } from "node:fs";
import { platform } from "node:os";

const PORT = 3000;

function killPortWindows() {
  try {
    const out = execSync(
      `netstat -ano | findstr :${PORT}`,
      { encoding: "utf8", stdio: ["pipe", "pipe", "ignore"] }
    );
    const pids = new Set();
    for (const line of out.split("\n")) {
      const parts = line.trim().split(/\s+/);
      const pid = parts[parts.length - 1];
      if (pid && /^\d+$/.test(pid)) pids.add(pid);
    }
    for (const pid of pids) {
      try {
        execSync(`taskkill /F /PID ${pid}`, { stdio: "ignore" });
        console.log(`Stopped process ${pid} on port ${PORT}`);
      } catch {
        /* already exited */
      }
    }
  } catch {
    /* port free */
  }
}

function killPortUnix() {
  try {
    execSync(`lsof -ti :${PORT} | xargs kill -9`, {
      stdio: "ignore",
      shell: true,
    });
  } catch {
    /* port free */
  }
}

if (platform() === "win32") {
  killPortWindows();
} else {
  killPortUnix();
}

if (existsSync(".next")) {
  try {
    rmSync(".next", { recursive: true, force: true, maxRetries: 3, retryDelay: 200 });
    console.log("Removed .next cache");
  } catch (err) {
    console.warn("Could not fully remove .next (files may be locked). Continuing…");
  }
}

console.log("Starting next dev...");
const child = spawn("npx", ["next", "dev", "-p", String(PORT)], {
  stdio: "inherit",
  shell: true,
});

child.on("exit", (code) => process.exit(code ?? 0));
