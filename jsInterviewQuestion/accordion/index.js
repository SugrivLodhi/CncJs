const dummyData = [
  {
    header: "Section1",
    content: "Section1 is this",
  },
  {
    header: "Section2",
    content: "Section2 is this",
  },
  {
    header: "Section3",
    content: "Section3 is this",
  },
  {
    header: "Section43",
    content: "Section4 is this",
  },
  {
    header: "Section5",
    content: "Section5 is this",
  },
];

addEventListener("DOMContentLoaded", () => {
  const accordionContainer = document.querySelector("#accordion");
  dummyData.forEach((data, index) => {
    const accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");
    const sectionHeader = document.createElement("div");
    sectionHeader.classList.add("accordion-header");
    sectionHeader.innerText = data.header;
    const accodionContent = document.createElement("div");
    accodionContent.classList.add("accordion-content");
    accodionContent.innerHTML = `<p>${data.content}</p>`;
    accordionItem.append(sectionHeader);
    accordionItem.appendChild(accodionContent);
    accordionContainer.appendChild(accordionItem);
    if (index === 0) {
      accordionItem.classList.add("active");
      accodionContent.style.display = "block";
    }
  });
  accordionContainer.addEventListener("click", function (event) {
    const header = event.target.closest(".accordion-header");
    if (!header) return;
    const sectionItem = header.parentNode;
    const content = sectionItem.querySelector(".accordion-content");
    const isActive = sectionItem.classList.contains("active");
    document.querySelectorAll(".accordion-item").forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".accordion-content").style.display = "none";
    });
    if (!isActive) {
      sectionItem.classList.add("active");
      content.style.display = "block";
    }
  });
});
