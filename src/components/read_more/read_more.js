
export function toggleReadMore() {
  const readMore = document.querySelector(".read_more");
  if (readMore) {
    if (readMore.classList.contains("hide")) {
      openReadMore();
      openFade();
    } else {
      closeReadMore();
      closeFade();
    }
  }
}

function openReadMore() {
  const readMore = document.querySelector(".read_more");
  readMore.classList.remove("hide");
}

function closeReadMore() {
  const readMore = document.querySelector(".read_more");
  readMore.classList.add("hide");
}

function openFade() {
  const fade = document.querySelector(".fade");
  fade.classList.remove("hide");
}

function closeFade() {
  const fade = document.querySelector(".fade");
  fade.classList.add("hide");
}

export function updateReadMoreInfos(item) {
  const readMore = document.querySelector(".read_more");

  const title = readMore.querySelector(".title");
  title.textContent = item.title;

  const subtitle = readMore.querySelector(".subtitle");
  subtitle.textContent = item.subtitle;

  const description = readMore.querySelector(".description");
  description.textContent = item.description;

  const topics = readMore.querySelector(".topics");
  topics.innerHTML = "";
  for (const topic of item.topics) {
    const listItem = document.createElement("li");

    const ask = document.createElement("p");
    ask.textContent = topic.ask;
    listItem.appendChild(ask);

    const answer = document.createElement("span");
    answer.textContent = topic.answer;
    listItem.appendChild(answer);

    topics.appendChild(listItem);
  }
}