import subprocess
import requests
import json
from datetime import datetime

TARGET = "https://llm-powered-chatbot-silk.vercel.app/" 
OUTPUT_FILE = "security_report.json"


def check_headers(url):
    try:
        r = requests.get(url, timeout=10)
        headers = r.headers

        checks = {
            "CSP": "content-security-policy",
            "HSTS": "strict-transport-security",
            "X-Frame-Options": "x-frame-options",
            "X-Content-Type-Options": "x-content-type-options",
        }

        results = {}
        for name, key in checks.items():
            results[name] = "OK" if key in headers else "MISSING"

        return results
    except Exception as e:
        return {"error": str(e)}


def run_nuclei(url):
    try:
        cmd = [
            "nuclei",
            "-u", url,
            "-severity", "medium,high,critical",
            "-silent",
            "-json"
        ]

        result = subprocess.run(cmd, capture_output=True, text=True)
        findings = []

        for line in result.stdout.splitlines():
            try:
                findings.append(json.loads(line))
            except:
                continue

        return findings

    except Exception as e:
        return [{"error": str(e)}]


def main():
    print("[*] Starting security scan...")

    report = {
        "target": TARGET,
        "time": str(datetime.now()),
        "headers": check_headers(TARGET),
        "nuclei_findings": run_nuclei(TARGET)
    }

    with open(OUTPUT_FILE, "w") as f:
        json.dump(report, f, indent=4)

    print("[+] Report saved:", OUTPUT_FILE)


if __name__ == "__main__":
    main()