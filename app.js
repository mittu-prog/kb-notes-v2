/* kb-notes-v2 Read-State Sync & Decryption Engine */
(function() {
    const MASTER_SALT = "kb_notes_v2_salt_9f8a7b6c";
    const KEY_VERIFIER = "2f4b86a8071c59cf";
    const ENC_SYNC_CFG = "Ug68VUUMatoGw2Pn7RcbMAtkRqR1URU4xNTbklUmapDY7RFsNYEBh3RqnRwKBrXm+A6s8hbFzSjqgv0FkbxImiXBWprRIK0jzYjAlOCnYSnpGKKoWkN7o5e9FC9yKTo6rcrmP/JjeF75vXaWnRDl";
    const PAGES_URL = "https://mittu-prog.github.io/kb-notes-v2/";
    const ENC_QR_SVG = "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";
    const STORAGE_KEY_READ = "kb_notes_v2_read_v1";
    const STORAGE_KEY_MK = "kb_notes_v2_mk_v1";
    const STORAGE_KEY_PW = "kb_notes_v2_pw_v1";

    // --- Pure-JS SHA-256 ---
    const K256 = new Uint32Array([
        0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,
        0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,
        0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,
        0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,
        0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,
        0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,
        0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,
        0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2
    ]);

    function rotr(n, x) { return (x >>> n) | (x << (32 - n)); }

    function sha256Bytes(msgBytes) {
        const l = msgBytes.length;
        const bitLenHi = Math.floor((l * 8) / 0x100000000);
        const bitLenLo = (l * 8) >>> 0;
        const padLen = ((l + 9 + 63) & ~63);
        const buf = new Uint8Array(padLen);
        buf.set(msgBytes);
        buf[l] = 0x80;
        const dv = new DataView(buf.buffer);
        dv.setUint32(padLen - 8, bitLenHi, false);
        dv.setUint32(padLen - 4, bitLenLo, false);

        let H0 = 0x6a09e667, H1 = 0xbb67ae85, H2 = 0x3c6ef372, H3 = 0xa54ff53a;
        let H4 = 0x510e527f, H5 = 0x9b05688c, H6 = 0x1f83d9ab, H7 = 0x5be0cd19;
        const W = new Uint32Array(64);

        for (let offset = 0; offset < padLen; offset += 64) {
            for (let i = 0; i < 16; i++) W[i] = dv.getUint32(offset + i * 4, false);
            for (let i = 16; i < 64; i++) {
                const s0 = rotr(7, W[i - 15]) ^ rotr(18, W[i - 15]) ^ (W[i - 15] >>> 3);
                const s1 = rotr(17, W[i - 2]) ^ rotr(19, W[i - 2]) ^ (W[i - 2] >>> 10);
                W[i] = (W[i - 16] + s0 + W[i - 7] + s1) >>> 0;
            }
            let a = H0, b = H1, c = H2, d = H3, e = H4, f = H5, g = H6, h = H7;
            for (let i = 0; i < 64; i++) {
                const S1 = rotr(6, e) ^ rotr(11, e) ^ rotr(25, e);
                const ch = (e & f) ^ (~e & g);
                const temp1 = (h + S1 + ch + K256[i] + W[i]) >>> 0;
                const S0 = rotr(2, a) ^ rotr(13, a) ^ rotr(22, a);
                const maj = (a & b) ^ (a & c) ^ (b & c);
                const temp2 = (S0 + maj) >>> 0;
                h = g; g = f; f = e; e = (d + temp1) >>> 0;
                d = c; c = b; b = a; a = (temp1 + temp2) >>> 0;
            }
            H0 = (H0 + a) >>> 0; H1 = (H1 + b) >>> 0; H2 = (H2 + c) >>> 0; H3 = (H3 + d) >>> 0;
            H4 = (H4 + e) >>> 0; H5 = (H5 + f) >>> 0; H6 = (H6 + g) >>> 0; H7 = (H7 + h) >>> 0;
        }
        const out = new Uint8Array(32);
        const outDv = new DataView(out.buffer);
        outDv.setUint32(0, H0, false); outDv.setUint32(4, H1, false);
        outDv.setUint32(8, H2, false); outDv.setUint32(12, H3, false);
        outDv.setUint32(16, H4, false); outDv.setUint32(20, H5, false);
        outDv.setUint32(24, H6, false); outDv.setUint32(28, H7, false);
        return out;
    }

    function bytesToHex(bytes) {
        let s = "";
        for (let i = 0; i < bytes.length; i++) s += bytes[i].toString(16).padStart(2, "0");
        return s;
    }

    function hexToBytes(hex) {
        const out = new Uint8Array(hex.length / 2);
        for (let i = 0; i < out.length; i++) out[i] = parseInt(hex.substr(i * 2, 2), 16);
        return out;
    }

    function deriveKey32(password) {
        const enc = new TextEncoder();
        const data = enc.encode(MASTER_SALT + ":" + password);
        let h = sha256Bytes(data);
        const combined = new Uint8Array(32 + data.length);
        combined.set(data, 32);
        for (let i = 0; i < 1000; i++) {
            combined.set(h, 0);
            h = sha256Bytes(combined);
        }
        return h;
    }

    function verifyKey32(key32) {
        if (!key32 || key32.length !== 32) return false;
        const suffix = new TextEncoder().encode(":verify_v1");
        const buf = new Uint8Array(32 + suffix.length);
        buf.set(key32, 0);
        buf.set(suffix, 32);
        return bytesToHex(sha256Bytes(buf)).slice(0, 16) === KEY_VERIFIER;
    }

    function rotl32(v, c) { return ((v << c) | (v >>> (32 - c))) >>> 0; }

    function qround(x, a, b, c, d) {
        x[a] = (x[a] + x[b]) >>> 0; x[d] = rotl32(x[d] ^ x[a], 16);
        x[c] = (x[c] + x[d]) >>> 0; x[b] = rotl32(x[b] ^ x[c], 12);
        x[a] = (x[a] + x[b]) >>> 0; x[d] = rotl32(x[d] ^ x[a], 8);
        x[c] = (x[c] + x[d]) >>> 0; x[b] = rotl32(x[b] ^ x[c], 7);
    }

    function chacha20Xor(key32, nonce12, dataBytes) {
        const keyDv = new DataView(key32.buffer, key32.byteOffset, 32);
        const nonceDv = new DataView(nonce12.buffer, nonce12.byteOffset, 12);
        const state = new Uint32Array(16);
        state[0] = 0x61707865; state[1] = 0x3320646e;
        state[2] = 0x79622d32; state[3] = 0x6b206574;
        for (let i = 0; i < 8; i++) state[4 + i] = keyDv.getUint32(i * 4, true);
        for (let i = 0; i < 3; i++) state[13 + i] = nonceDv.getUint32(i * 4, true);

        const out = new Uint8Array(dataBytes.length);
        const working = new Uint32Array(16);
        const ksBytes = new Uint8Array(64);
        const ksDv = new DataView(ksBytes.buffer);
        const blocks = Math.ceil(dataBytes.length / 64);

        for (let b = 0; b < blocks; b++) {
            state[12] = b >>> 0;
            working.set(state);
            for (let r = 0; r < 10; r++) {
                qround(working, 0, 4, 8, 12); qround(working, 1, 5, 9, 13);
                qround(working, 2, 6, 10, 14); qround(working, 3, 7, 11, 15);
                qround(working, 0, 5, 10, 15); qround(working, 1, 6, 11, 12);
                qround(working, 2, 7, 8, 13); qround(working, 3, 4, 9, 14);
            }
            for (let i = 0; i < 16; i++) {
                ksDv.setUint32(i * 4, (working[i] + state[i]) >>> 0, true);
            }
            const offset = b * 64;
            const limit = Math.min(64, dataBytes.length - offset);
            for (let i = 0; i < limit; i++) {
                out[offset + i] = dataBytes[offset + i] ^ ksBytes[i];
            }
        }
        return out;
    }

    function decryptPayloadBytes(rawBytes, key32) {
        const nonce12 = rawBytes.subarray(0, 12);
        const ct = rawBytes.subarray(12);
        return chacha20Xor(key32, nonce12, ct);
    }

    function decryptBase64(b64, key32) {
        const binStr = atob(b64);
        const raw = new Uint8Array(binStr.length);
        for (let i = 0; i < binStr.length; i++) raw[i] = binStr.charCodeAt(i);
        const ptBytes = decryptPayloadBytes(raw, key32);
        return new TextDecoder("utf-8").decode(ptBytes);
    }

    // --- Key / Password Resolution ---
    let activeKey32 = null;
    let activePassword = null;
    let syncConfig = null;

    function loadWindowNameCache() {
        try {
            if (window.name && window.name.startsWith("KB_NOTES_V2:")) {
                return JSON.parse(window.name.slice(12));
            }
        } catch (e) {}
        return {};
    }

    function saveWindowNameCache(obj) {
        try {
            const cur = loadWindowNameCache();
            Object.assign(cur, obj);
            window.name = "KB_NOTES_V2:" + JSON.stringify(cur);
        } catch (e) {}
    }

    function tryUnlockWithPassword(pw) {
        if (!pw) return false;
        const k = deriveKey32(pw);
        if (verifyKey32(k)) {
            activeKey32 = k;
            activePassword = pw;
            const mkHex = bytesToHex(k);
            try {
                localStorage.setItem(STORAGE_KEY_MK, mkHex);
                localStorage.setItem(STORAGE_KEY_PW, pw);
            } catch (e) {}
            saveWindowNameCache({ mk: mkHex, pw: pw });
            initSyncConfig();
            return true;
        }
        return false;
    }

    function initSyncConfig() {
        if (!activeKey32 || syncConfig) return;
        try {
            const jsonStr = decryptBase64(ENC_SYNC_CFG, activeKey32);
            syncConfig = JSON.parse(jsonStr);
        } catch (e) {
            console.warn("Failed to decrypt sync config:", e);
        }
    }

    function autoResolveKey() {
        if (location.hash && location.hash.includes("pw=")) {
            const m = location.hash.match(/[#&]pw=([^&]+)/);
            if (m && m[1]) {
                const pw = decodeURIComponent(m[1]);
                if (tryUnlockWithPassword(pw)) {
                    try {
                        history.replaceState(null, "", location.pathname + location.search);
                    } catch (e) {}
                    return true;
                }
            }
        }
        try {
            const wn = loadWindowNameCache();
            const mkHex = localStorage.getItem(STORAGE_KEY_MK) || wn.mk;
            const savedPw = localStorage.getItem(STORAGE_KEY_PW) || wn.pw;
            if (mkHex && mkHex.length === 64) {
                const k = hexToBytes(mkHex);
                if (verifyKey32(k)) {
                    activeKey32 = k;
                    activePassword = savedPw || "";
                    saveWindowNameCache({ mk: mkHex, pw: activePassword });
                    initSyncConfig();
                    return true;
                }
            }
        } catch (e) {}
        if (window.__MOSH_LOCAL_PASS__) {
            if (tryUnlockWithPassword(window.__MOSH_LOCAL_PASS__)) {
                return true;
            }
        }
        return false;
    }

    // --- Read State CRDT Store ---
    let readState = {};
    let syncInProgress = false;
    let syncTimer = null;

    function loadLocalReadState() {
        let merged = {};
        try {
            const wn = loadWindowNameCache();
            if (wn.readState && typeof wn.readState === "object") {
                merged = Object.assign({}, wn.readState);
            }
        } catch (e) {}
        try {
            const raw = localStorage.getItem(STORAGE_KEY_READ);
            if (raw) {
                const parsed = JSON.parse(raw);
                mergeStates(merged, parsed);
            }
        } catch (e) {}
        readState = merged;
    }

    function saveLocalReadState() {
        try {
            localStorage.setItem(STORAGE_KEY_READ, JSON.stringify(readState));
        } catch (e) {}
        saveWindowNameCache({ readState: readState });
    }

    function mergeStates(target, incoming) {
        if (!incoming || typeof incoming !== "object") return false;
        let changed = false;
        for (const [k, val] of Object.entries(incoming)) {
            if (!val || typeof val !== "object") continue;
            const inT = Number(val.t) || 0;
            const inR = val.r ? 1 : 0;
            const cur = target[k];
            if (!cur || inT > (Number(cur.t) || 0)) {
                if (!cur || cur.r !== inR || cur.t !== inT) {
                    target[k] = { r: inR, t: inT };
                    changed = true;
                }
            }
        }
        return changed;
    }

    function isItemRead(key) {
        return Boolean(readState[key] && readState[key].r === 1);
    }

    function setItemRead(key, isRead) {
        if (!key) return;
        readState[key] = {
            r: isRead ? 1 : 0,
            t: Date.now()
        };
        saveLocalReadState();
        refreshReadUI();
        scheduleCloudSync(true);
    }

    function toggleItemRead(key) {
        setItemRead(key, !isItemRead(key));
    }

    function updateSyncStatusUI(state, text) {
        document.querySelectorAll(".sync-status").forEach(el => {
            el.className = "sync-status " + (state || "");
            el.textContent = text;
        });
    }

    function scheduleCloudSync(pushImmediately) {
        if (syncTimer) clearTimeout(syncTimer);
        syncTimer = setTimeout(() => syncWithGist(pushImmediately), pushImmediately ? 350 : 50);
    }

    async function syncWithGist(forcePush) {
        if (!syncConfig || !syncConfig.token || !syncConfig.gistId) {
            updateSyncStatusUI("err", "🔒 パスワード未解除");
            return;
        }
        if (syncInProgress) return;
        syncInProgress = true;
        updateSyncStatusUI("", "🔄 同期中...");

        try {
            const resp = await fetch("https://api.github.com/gists/" + syncConfig.gistId, {
                method: "GET",
                headers: {
                    "Accept": "application/vnd.github+json",
                    "Authorization": "Bearer " + syncConfig.token
                },
                cache: "no-store"
            });
            if (!resp.ok) throw new Error("HTTP " + resp.status);
            const gistData = await resp.json();
            const fileObj = gistData.files && gistData.files["mosh_cocco_pdf_read_state.json"];
            let remoteItems = {};
            if (fileObj && fileObj.content) {
                try {
                    const parsed = JSON.parse(fileObj.content);
                    remoteItems = parsed.items || {};
                } catch (e) {}
            }

            const localUpdatedFromRemote = mergeStates(readState, remoteItems);
            const remoteNeedsUpdate = forcePush || mergeStates(remoteItems, readState);

            if (localUpdatedFromRemote) {
                saveLocalReadState();
                refreshReadUI();
            }

            if (remoteNeedsUpdate) {
                const payload = {
                    files: {
                        "mosh_cocco_pdf_read_state.json": {
                            content: JSON.stringify({
                                version: 1,
                                updated_at: new Date().toISOString(),
                                items: readState
                            }, null, 2)
                        }
                    }
                };
                const patchResp = await fetch("https://api.github.com/gists/" + syncConfig.gistId, {
                    method: "PATCH",
                    headers: {
                        "Accept": "application/vnd.github+json",
                        "Authorization": "Bearer " + syncConfig.token,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                });
                if (!patchResp.ok) throw new Error("PATCH HTTP " + patchResp.status);
            }

            const nowStr = new Date().toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" });
            updateSyncStatusUI("ok", "☁️ 同期済 (" + nowStr + ")");
        } catch (err) {
            console.warn("Gist sync error:", err);
            updateSyncStatusUI("err", "⚠️ オフライン (端末保存済)");
        } finally {
            syncInProgress = false;
        }
    }

    // --- Encrypted Binary Asset Loader (Images & PDFs) ---
    const blobUrlCache = {};

    async function fetchAndDecryptBlobUrl(encUrl, mimeType) {
        if (blobUrlCache[encUrl]) return blobUrlCache[encUrl];
        const resp = await fetch(encUrl);
        if (!resp.ok) throw new Error("Failed to load " + encUrl);
        const buf = await resp.arrayBuffer();
        const ptBytes = decryptPayloadBytes(new Uint8Array(buf), activeKey32);
        const blob = new Blob([ptBytes], { type: mimeType });
        const url = URL.createObjectURL(blob);
        blobUrlCache[encUrl] = url;
        return url;
    }

    function loadEncryptedImages() {
        if (!activeKey32) return;
        const imgs = document.querySelectorAll("img[data-enc-src]");
        imgs.forEach(img => {
            const encSrc = img.getAttribute("data-enc-src");
            if (!encSrc) return;
            img.removeAttribute("data-enc-src");
            fetchAndDecryptBlobUrl(encSrc, "image/webp")
                .then(url => { img.src = url; })
                .catch(e => console.warn("Image decrypt error:", e));
        });
    }

    window.__moshOpenPdf = async function(encPdfUrl, origFilename, downloadOnly, ev) {
        if (ev) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        if (!activeKey32) {
            openModal("pwModal");
            return;
        }
        const btn = ev && ev.currentTarget;
        const origText = btn ? btn.innerHTML : "";
        let popupWin = null;
        if (!downloadOnly) {
            popupWin = window.open("", "_blank");
            if (popupWin) {
                popupWin.document.write("<p style='font-family:sans-serif;padding:24px;'>🔓 PDFを復号して開いています...</p>");
            }
        }
        try {
            if (btn) btn.innerHTML = "⏳ 復号中...";
            const blobUrl = await fetchAndDecryptBlobUrl(encPdfUrl, "application/pdf");
            if (downloadOnly) {
                const a = document.createElement("a");
                a.href = blobUrl;
                a.download = origFilename || "recipe.pdf";
                document.body.appendChild(a);
                a.click();
                a.remove();
            } else if (popupWin) {
                popupWin.location.href = blobUrl;
            } else {
                window.location.href = blobUrl;
            }
        } catch (err) {
            if (popupWin) popupWin.close();
            alert("PDFの読み込みに失敗しました（ローカルfile://ではなくWebサーバーまたはGitHub Pages経由で開いてください）: " + err.message);
        } finally {
            if (btn) btn.innerHTML = origText;
        }
    };

    window.__moshTogglePreview = function(key, ev) {
        if (ev) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        const box = document.getElementById("preview-" + key);
        if (!box) return;
        const isOpen = box.classList.toggle("open");
        if (ev && ev.currentTarget) {
            ev.currentTarget.innerHTML = isOpen ? "🔼 テキストを閉じる" : "📖 この場で中身テキストを見る";
        }
    };

    window.__moshSetTagSearch = function(tag, ev) {
        if (ev) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        const searchEl = document.getElementById("searchInput");
        if (!searchEl) return;
        if (searchEl.value === tag) {
            searchEl.value = "";
        } else {
            searchEl.value = tag;
        }
        document.querySelectorAll(".qtag").forEach(b => {
            b.classList.toggle("active", b.getAttribute("data-tag") === searchEl.value);
        });
        window.filterItems();
    };

    // --- UI Rendering & Decryption ---
    let currentReadFilter = "all";

    function unlockEncryptedElements() {
        if (!activeKey32) return;
        const encNodes = document.querySelectorAll("[data-enc]");
        encNodes.forEach(node => {
            const b64 = node.getAttribute("data-enc");
            if (!b64) return;
            try {
                const htmlStr = decryptBase64(b64, activeKey32);
                node.innerHTML = htmlStr;
                node.removeAttribute("data-enc");
            } catch (e) {
                console.error("Decryption error:", e);
            }
        });
        document.querySelectorAll(".lock-box").forEach(b => b.remove());
        loadEncryptedImages();
    }

    function showLockScreenIfNeeded() {
        if (activeKey32) return;
        const encNodes = document.querySelectorAll("[data-enc]");
        encNodes.forEach(node => {
            if (node.querySelector(".lock-box")) return;
            node.innerHTML = `
                <div class="lock-box">
                    <h3>🔒 Private Notes Archive</h3>
                    <p>閲覧およびクラウド同期を行うにはパスフレーズを入力してください。<br>（一度解除するとこのブラウザに記憶されます）</p>
                    <form class="pw-form" onsubmit="return window.__moshSubmitPw(event)">
                        <input type="password" class="pw-input" placeholder="パスフレーズを入力..." required>
                        <button type="submit" class="pw-submit">解除</button>
                    </form>
                </div>
            `;
        });
    }

    window.__moshSubmitPw = function(ev) {
        ev.preventDefault();
        const form = ev.target;
        const input = form.querySelector(".pw-input");
        const pw = (input && input.value || "").trim();
        if (tryUnlockWithPassword(pw)) {
            unlockEncryptedElements();
            refreshQrModal();
            closeModal("pwModal");
            refreshReadUI();
            syncWithGist(false);
        } else {
            alert("パスワードが正しくありません。");
        }
        return false;
    };

    function refreshReadUI() {
        const cards = document.querySelectorAll(".card[data-key]");
        let totalCount = cards.length;
        let readCount = 0;

        cards.forEach(card => {
            const key = card.getAttribute("data-key");
            const r = isItemRead(key);
            if (r) readCount++;
            card.classList.toggle("is-read", r);
            card.setAttribute("data-read", r ? "1" : "0");
            const btn = card.querySelector(".check-btn");
            if (btn) {
                btn.classList.toggle("is-read", r);
                btn.innerHTML = r
                    ? '<span class="check-icon">✓</span><span>確認済</span>'
                    : '<span class="check-icon"></span><span>未確認</span>';
                btn.title = r ? "クリックで未確認に戻す" : "クリックで確認済にする";
            }
        });

        if (totalCount > 0) {
            const unreadCount = totalCount - readCount;
            const pct = Math.round((readCount / totalCount) * 100);
            const statEl = document.getElementById("readProgressStats");
            if (statEl) {
                statEl.innerHTML = `確認済: <span class="read-num">${readCount}</span> / ${totalCount}件 (${pct}%) <span class="unread-num">・ 未確認: ${unreadCount}件</span>`;
            }
            const fillEl = document.getElementById("readProgressFill");
            if (fillEl) fillEl.style.width = pct + "%";

            const tabAll = document.getElementById("tabReadAll");
            const tabUnread = document.getElementById("tabReadUnread");
            const tabRead = document.getElementById("tabReadDone");
            if (tabAll) tabAll.textContent = `すべて (${totalCount})`;
            if (tabUnread) tabUnread.textContent = `未確認のみ (${unreadCount})`;
            if (tabRead) tabRead.textContent = `確認済み (${readCount})`;

            if (typeof window.filterItems === "function") {
                window.filterItems();
            }
        }

        const detailMarker = document.querySelector("[data-item-key]");
        if (detailMarker) {
            const key = detailMarker.getAttribute("data-item-key");
            const r = isItemRead(key);
            const topBtn = document.getElementById("topReadBtn");
            if (topBtn) {
                topBtn.classList.toggle("is-read", r);
                topBtn.innerHTML = r
                    ? '<span class="check-icon">✓</span><span>確認済</span>'
                    : '<span class="check-icon"></span><span>未確認</span>';
            }
            const bottomBtn = document.getElementById("bottomReadBtn");
            if (bottomBtn) {
                bottomBtn.classList.toggle("is-read", r);
                bottomBtn.innerHTML = r
                    ? '✓ 確認済み（タップで未確認に戻す）'
                    : '✓ このレシピ・資料を「確認済」にする';
            }
        }
    }

    window.setReadFilter = function(mode) {
        currentReadFilter = mode;
        document.querySelectorAll(".read-tab").forEach(t => {
            t.classList.toggle("active", t.getAttribute("data-mode") === mode);
        });
        if (typeof window.filterItems === "function") {
            window.filterItems();
        }
    };

    window.filterItems = function() {
        const searchEl = document.getElementById("searchInput");
        const filterEl = document.getElementById("filterSelect");
        if (!searchEl || !filterEl) return;
        const rawQ = searchEl.value.trim().toLowerCase();
        const terms = rawQ ? rawQ.split(/\s+/) : [];
        const f = filterEl.value;
        const cards = document.querySelectorAll(".card[data-key]");
        let visible = 0;

        cards.forEach(c => {
            const hay = (c.getAttribute("data-search") || "").toLowerCase();
            const cat = c.getAttribute("data-cat");
            const isRead = c.getAttribute("data-read") === "1";
            let show = terms.every(t => hay.includes(t));
            if (show && f !== "all" && cat !== f) show = false;
            if (show && currentReadFilter === "unread" && isRead) show = false;
            if (show && currentReadFilter === "read" && !isRead) show = false;
            c.style.display = show ? "flex" : "none";
            if (show) visible++;
        });
        const countBar = document.getElementById("countBar");
        if (countBar) countBar.textContent = `表示中: ${visible}件 / 全${cards.length}件`;
    };

    window.sortItems = function() {
        const sortEl = document.getElementById("sortSelect");
        const list = document.getElementById("itemList");
        if (!sortEl || !list) return;
        const order = sortEl.value;
        const cards = Array.from(list.querySelectorAll(".card[data-key]"));
        cards.sort((a, b) => {
            if (order === "title") {
                return (a.getAttribute("data-title") || "").localeCompare(b.getAttribute("data-title") || "", "ja");
            }
            const da = a.getAttribute("data-date") || "";
            const db = b.getAttribute("data-date") || "";
            if (da !== db) {
                return order === "asc" ? da.localeCompare(db) : db.localeCompare(da);
            }
            return (a.getAttribute("data-key") || "").localeCompare(b.getAttribute("data-key") || "");
        });
        cards.forEach(c => list.appendChild(c));
    };

    window.openModal = function(id) {
        const el = document.getElementById(id);
        if (el) el.classList.add("open");
    };

    window.closeModal = function(id) {
        const el = document.getElementById(id);
        if (el) el.classList.remove("open");
        if (id === "videoModal") {
            const frame = document.getElementById("videoModalIframe");
            if (frame) frame.src = "about:blank";
        }
    };

    window.__moshPlayVideo = function(cloudId, title, sizeMb, ev) {
        if (ev) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        if (!activeKey32) {
            openModal("pwModal");
            return;
        }
        const titleEl = document.getElementById("videoModalTitle");
        const frameEl = document.getElementById("videoModalIframe");
        const driveLinkEl = document.getElementById("videoModalDriveLink");
        const metaEl = document.getElementById("videoModalMeta");
        if (titleEl) titleEl.textContent = "🎬 " + title;
        if (frameEl) frameEl.src = "https://drive.google.com/file/d/" + cloudId + "/preview";
        if (driveLinkEl) driveLinkEl.href = "https://drive.google.com/file/d/" + cloudId + "/view";
        if (metaEl) metaEl.textContent = "サイズ: " + sizeMb + " MB ｜ 再生されない場合は右の「Googleドライブで開く」をタップしてください";
        openModal("videoModal");
    };

    window.__moshToggleVideoHub = function(ev) {
        if (ev) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        const drawer = document.getElementById("videoHubDrawer");
        if (!drawer) return;
        const isOpen = drawer.classList.toggle("open");
        if (ev && ev.currentTarget) {
            ev.currentTarget.innerHTML = isOpen ? "🔼 動画一覧を閉じる" : "🎬 全49本の動画一覧を開く";
        }
    };

    window.copyShareUrl = function() {
        const inp = document.getElementById("shareUrlInput");
        if (!inp) return;
        inp.select();
        navigator.clipboard.writeText(inp.value).then(() => {
            const btn = document.getElementById("copyUrlBtn");
            if (btn) {
                const orig = btn.textContent;
                btn.textContent = "コピー完了!";
                setTimeout(() => btn.textContent = orig, 1500);
            }
        });
    };

    window.__moshToggleRead = function(key, ev) {
        if (ev) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        toggleItemRead(key);
    };

    window.__moshManualSync = function() {
        if (!activeKey32) {
            openModal("pwModal");
            return;
        }
        syncWithGist(true);
    };

    function refreshQrModal() {
        if (!activeKey32) return;
        const qrBox = document.getElementById("qrWrapBox");
        const inp = document.getElementById("shareUrlInput");
        if (qrBox && ENC_QR_SVG) {
            try {
                qrBox.innerHTML = decryptBase64(ENC_QR_SVG, activeKey32);
            } catch (e) {}
        }
        if (inp) {
            inp.value = PAGES_URL + (activePassword ? ("#pw=" + encodeURIComponent(activePassword)) : "");
        }
    }

    function injectModals() {
        const shareUrl = PAGES_URL + (activePassword ? ("#pw=" + encodeURIComponent(activePassword)) : "");
        let qrInner = "🔒 パスフレーズ解除後にQRコードが表示されます";
        if (activeKey32 && ENC_QR_SVG) {
            try {
                qrInner = decryptBase64(ENC_QR_SVG, activeKey32);
            } catch (e) {}
        }
        const modalHtml = `
            <div class="modal-backdrop" id="qrModal" onclick="if(event.target===this)closeModal('qrModal')">
                <div class="modal-card">
                    <h3>📱 スマホ・タブレットで開く</h3>
                    <p>カメラで以下のQRコードを読み取ると、パスフレーズ入力不要で閲覧とチェック状態の自動同期ができます。<br>（「ホーム画面に追加」でアプリ化もできます）</p>
                    <div class="qr-wrap" id="qrWrapBox">${qrInner}</div>
                    <div class="url-copy-row">
                        <input type="text" id="shareUrlInput" value="${shareUrl}" readonly onclick="this.select()">
                        <button class="icon-btn" id="copyUrlBtn" onclick="copyShareUrl()">URLコピー</button>
                    </div>
                    <button class="pw-submit" style="width:100%" onclick="closeModal('qrModal')">閉じる</button>
                </div>
            </div>
            <div class="modal-backdrop" id="pwModal" onclick="if(event.target===this)closeModal('pwModal')">
                <div class="modal-card">
                    <h3>🔑 パスフレーズ入力</h3>
                    <p>ロック解除とクラウド同期のためのパスフレーズを入力してください。</p>
                    <form class="pw-form" style="margin-bottom:14px" onsubmit="return window.__moshSubmitPw(event)">
                        <input type="password" class="pw-input" placeholder="パスフレーズ..." required>
                        <button type="submit" class="pw-submit">解除</button>
                    </form>
                    <button class="icon-btn" onclick="closeModal('pwModal')">キャンセル</button>
                </div>
            </div>
            <div class="modal-backdrop" id="videoModal" onclick="if(event.target===this)closeModal('videoModal')">
                <div class="modal-card video-modal-card">
                    <div class="video-modal-header">
                        <h3 id="videoModalTitle">🎬 解説・LIVE動画</h3>
                        <button class="icon-btn" onclick="closeModal('videoModal')">✕ 閉じる</button>
                    </div>
                    <div class="video-frame-wrap">
                        <iframe id="videoModalIframe" src="about:blank" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    </div>
                    <div class="video-modal-footer">
                        <span id="videoModalMeta">Googleドライブ ストリーミング再生</span>
                        <a id="videoModalDriveLink" class="open-btn" href="#" target="_blank" rel="noopener">↗️ Googleドライブ（アプリ/別タブ）で開く</a>
                    </div>
                </div>
            </div>
        `;
        const wrap = document.createElement("div");
        wrap.innerHTML = modalHtml;
        document.body.appendChild(wrap);
    }

    function init() {
        loadLocalReadState();
        const unlocked = autoResolveKey();
        if (unlocked) {
            unlockEncryptedElements();
        } else {
            showLockScreenIfNeeded();
        }
        injectModals();
        refreshReadUI();
        if (unlocked) {
            syncWithGist(false);
        } else {
            updateSyncStatusUI("err", "🔒 パスワード未入力");
        }

        document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === "visible" && activeKey32) {
                loadLocalReadState();
                refreshReadUI();
                syncWithGist(false);
            }
        });
        window.addEventListener("pageshow", () => {
            loadLocalReadState();
            refreshReadUI();
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
