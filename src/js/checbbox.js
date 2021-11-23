$(document).ready(function () {
  const courses = [
    {
      content: "Khái niệm",
      link: "#",
      category: ["KN"],
      itemsFirst: [
        {
          content: "Chương 1: Logic",
          link: "#",
        },
        {
          content: "Chương 2: Logic",
          link: "#",
        },
        {
          content: "Chương 3: Logic",
          link: "#",
        },
      ],
    },
    {
      content: "Định lí & Tính chất",
      link: "#",
      category: ["DL"],
      itemsChild: [
        {
          content: "Chương 1: Logic",
          link: "#",
        },
        {
          content: "Chương 2: Logic",
          link: "#",
        },
        {
          content: "Chương 3: Logic",
          link: "#",
        },
      ],
    },
    {
      content: "Dạng bài tập",
      link: "#",
      category: ["DBT"],
      itemsChild: [
        {
          content: "Chương 1: Logic",
          link: "#",
        },
        {
          content: "Chương 2: Logic",
          link: "#",
        },
        {
          content: "Chương 3: Logic",
          link: "#",
        },
      ],
    },
    {
      content: "Phương pháp giải",
      link: "#",
      category: ["PPG"],
      itemsChild: [
        {
          content: "Chương 1: Logic",
          link: "#",
        },
        {
          content: "Chương 2: Logic",
          link: "#",
        },
        {
          content: "Chương 3: Logic",
          link: "#",
        },
      ],
    },
  ];

  renderTeam(courses, "#checkboxs");
});

function renderTeam(list, selector) {
  list.map((val, index) => {
    $(
      `<input onClick ="updateList()" type="checkbox" class="vehicle" name="vehicle" value="${val.category[0]}">
       <label for="vehicle1"> ${val.content}</label><br>`
    ).appendTo(selector);
  });
}
