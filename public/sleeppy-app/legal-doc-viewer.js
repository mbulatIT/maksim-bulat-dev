function escapeHtml(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll("\"", "&quot;")
        .replaceAll("'", "&#39;");
}

function formatInline(value) {
    let html = escapeHtml(value);

    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

    return html;
}

function renderMarkdown(markdown) {
    const lines = markdown.replace(/\r\n/g, "\n").split("\n");
    let html = "";
    let paragraph = [];
    let list = [];

    const flushParagraph = () => {
        if (!paragraph.length) {
            return;
        }

        html += `<p>${paragraph.map((line) => formatInline(line)).join("<br>")}</p>`;
        paragraph = [];
    };

    const flushList = () => {
        if (!list.length) {
            return;
        }

        html += `<ul>${list.map((item) => `<li>${formatInline(item)}</li>`).join("")}</ul>`;
        list = [];
    };

    for (const rawLine of lines) {
        const line = rawLine.trimEnd();
        const trimmed = line.trim();

        if (!trimmed) {
            flushParagraph();
            flushList();
            continue;
        }

        if (trimmed.startsWith("# ")) {
            flushParagraph();
            flushList();
            html += `<h1>${formatInline(trimmed.slice(2))}</h1>`;
            continue;
        }

        if (trimmed.startsWith("## ")) {
            flushParagraph();
            flushList();
            html += `<h2>${formatInline(trimmed.slice(3))}</h2>`;
            continue;
        }

        if (trimmed.startsWith("### ")) {
            flushParagraph();
            flushList();
            html += `<h3>${formatInline(trimmed.slice(4))}</h3>`;
            continue;
        }

        if (trimmed.startsWith("- ")) {
            flushParagraph();
            list.push(trimmed.slice(2));
            continue;
        }

        paragraph.push(trimmed);
    }

    flushParagraph();
    flushList();

    return html;
}

document.addEventListener("DOMContentLoaded", async () => {
    const target = document.getElementById("doc");
    const status = document.getElementById("status");

    if (!target || !status) {
        return;
    }

    try {
        const response = await fetch("index.md", { cache: "no-cache" });

        if (!response.ok) {
            throw new Error(`Failed to load markdown: ${response.status}`);
        }

        const markdown = await response.text();
        target.innerHTML = renderMarkdown(markdown);
        status.remove();
    } catch {
        status.innerHTML = `${status.dataset.error || "Unable to load this document."} <a href="index.md">Open Markdown</a>`;
    }
});
