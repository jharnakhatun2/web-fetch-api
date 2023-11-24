const displayData = document.getElementById('display');
async function fetchData() {
    const res = await fetch("http://127.0.0.1:5500/data.txt");
    const data = await res.text();
    displayData.innerText = data;
}