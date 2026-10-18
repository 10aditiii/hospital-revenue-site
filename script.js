// Hospital Network Revenue — page logic. Data lives in data.js.
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const fmt = n => n.toLocaleString("en-US");
const sum = (a, k) => a.reduce((s, x) => s + x[k], 0);
const netCls = n => (n >= 0 ? "gain" : "loss");
const signed = n => (n >= 0 ? "+" : "−") + fmt(Math.abs(n));
const chev = '<svg class="chev" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M7 4l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

// Monthly totals for a country = sum of its hospitals, month by month
const countryMonthly = c => MONTHS.map((_, i) => c.hospitals.reduce((s, h) => s + h.monthly[i], 0));

function monthsHTML(values, label) {
  const max = Math.max(...values);
  const cells = values.map((v, i) => `
    <div class="m">
      <div class="col"><i style="height:${(v / max * 100).toFixed(1)}%"></i></div>
      <span class="mn">${MONTHS[i]}</span>
      <span class="mv">${fmt(v)}</span>
    </div>`).join("");
  return `<div class="mlabel">${label}</div><div class="months">${cells}</div>`;
}

function detailHTML(c) {
  const max = Math.max(...c.hospitals.flatMap(h => [h.revenue, h.cost]));
  const sr = sum(c.hospitals, "revenue"), sc = sum(c.hospitals, "cost");
  const net = c.revenue - c.cost;
  const rows = c.hospitals.map((h, i) => {
    const n = h.revenue - h.cost, id = `m-${c.code}-${i}`;
    return `<tr>
      <td><span class="hname">${h.name}</span><span class="city">${h.city}</span></td>
      <td class="num"><button type="button" class="revbtn" aria-expanded="false" aria-controls="${id}" title="Show monthly revenue">${fmt(h.revenue)}</button></td>
      <td class="num cost">${fmt(h.cost)}</td>
      <td class="num net ${netCls(n)}">${signed(n)}</td>
      <td><div class="bars"><div class="bar r" style="width:${(h.revenue / max * 100).toFixed(1)}%"></div><div class="bar c" style="width:${(h.cost / max * 100).toFixed(1)}%"></div></div></td>
    </tr>
    <tr class="months-row" id="${id}" hidden><td colspan="5">${monthsHTML(h.monthly, `${h.name} · ${h.city} — revenue by month`)}</td></tr>`;
  }).join("");
  return `<div class="detail">
    <div class="summary">
      <span class="chip">Hospitals <b>${c.hospitals.length}</b></span>
      <span class="chip ${netCls(net)}">Net <b>${signed(net)}</b></span>
      <button type="button" class="monthbtn" aria-expanded="false" aria-controls="cm-${c.code}">Revenue by month</button>
    </div>
    <div class="country-months" id="cm-${c.code}" hidden>${monthsHTML(countryMonthly(c), `${c.name} — total revenue by month`)}</div>
    <div class="tablebox"><table>
      <thead><tr><th>Hospital</th><th class="num">Revenue</th><th class="num">Cost</th><th class="num">Net</th><th>Share</th></tr></thead>
      <tbody>${rows}</tbody>
      <tfoot><tr><td>Total</td><td class="num rev">${fmt(sr)}</td><td class="num cost">${fmt(sc)}</td><td class="num net ${netCls(sr - sc)}">${signed(sr - sc)}</td><td></td></tr></tfoot>
    </table></div>
    <p class="note">Click any hospital's revenue to see its 12 months.</p>
  </div>`;
}

// Toggle a panel from a button that has aria-controls
function wireToggle(btn) {
  btn.addEventListener("click", e => {
    e.stopPropagation();
    const panel = document.getElementById(btn.getAttribute("aria-controls"));
    const open = panel.hidden;
    panel.hidden = !open;
    btn.setAttribute("aria-expanded", String(open));
  });
}

const rowsEl = document.getElementById("rows");
DATA.forEach(c => {
  const el = document.createElement("div");
  el.className = "country";
  el.innerHTML = `<button type="button" class="cbtn" aria-expanded="false" aria-controls="d-${c.code}">
      <span class="cname">${c.name}<span class="code">${c.code}</span></span>
      <span class="num rev">${fmt(c.revenue)}</span>
      <span class="num cost">${fmt(c.cost)}</span>
      ${chev}
    </button>
    <div id="d-${c.code}" class="dpanel" hidden>${detailHTML(c)}</div>`;
  const btn = el.querySelector(".cbtn"), panel = el.querySelector(".dpanel");
  btn.addEventListener("click", () => {
    const open = panel.hidden;
    document.querySelectorAll(".country").forEach(o => {
      o.classList.remove("open");
      o.querySelector(".dpanel").hidden = true;
      o.querySelector(".cbtn").setAttribute("aria-expanded", "false");
    });
    if (open) { el.classList.add("open"); panel.hidden = false; btn.setAttribute("aria-expanded", "true"); }
  });
  el.querySelectorAll(".revbtn, .monthbtn").forEach(wireToggle);
  rowsEl.appendChild(el);
});

document.getElementById("total").innerHTML =
  `<span>All countries</span><span class="num rev">${fmt(sum(DATA, "revenue"))}</span><span class="num cost">${fmt(sum(DATA, "cost"))}</span><span></span>`;
