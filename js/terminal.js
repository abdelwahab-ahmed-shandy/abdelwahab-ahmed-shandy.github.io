        // Professional terminal animation with dynamic lines
        const terminalCmds = [
            { cmd: "whoami", resp: "Abdelwahab Shandy (AAS) | Information Systems Senior, Security Researcher." },
            { cmd: "cat interests.txt", resp: "SOC Analysis | Digital Forensics | Threat Hunting | n8n & SOAR | CTF challenges" },
            { cmd: "git status", resp: "Currently: SANS GSOC preparation & BI graduation project with AI pipelines." },
            { cmd: "echo $portfolio_version", resp: "v2.0 — fully responsive, project images & interactive profile." }
        ];

        const terminalContainer = document.getElementById('dynamicTerminal');
        if (terminalContainer) {
            terminalContainer.innerHTML = '';
            let idx = 0;
            function addTerminalLine() {
                if (idx >= terminalCmds.length) {
                    const lastDiv = document.createElement('div');
                    lastDiv.className = 'terminal-line';
                    lastDiv.innerHTML = `<span class="prompt">➜</span> <span class="command">~</span> <span class="blink"></span>`;
                    terminalContainer.appendChild(lastDiv);
                    return;
                }
                const lineDiv = document.createElement('div');
                lineDiv.className = 'terminal-line';
                lineDiv.innerHTML = `<span class="prompt">➜</span> <span class="command"></span>`;
                terminalContainer.appendChild(lineDiv);
                const cmdSpan = lineDiv.querySelector('.command');
                const fullCmd = terminalCmds[idx].cmd;
                let i = 0;
                const typeInterval = setInterval(() => {
                    if (i < fullCmd.length) {
                        cmdSpan.textContent += fullCmd[i];
                        i++;
                    } else {
                        clearInterval(typeInterval);
                        const respP = document.createElement('p');
                        respP.className = 'response';
                        respP.textContent = terminalCmds[idx].resp;
                        lineDiv.appendChild(respP);
                        idx++;
                        setTimeout(addTerminalLine, 500);
                    }
                }, 55);
            }
            addTerminalLine();
        }

        // smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === "#" || targetId === "") return;
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });