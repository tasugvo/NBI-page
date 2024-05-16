export const ReadMore = {};

ReadMore.updateReadMoreInfos = (item) => {
  const readMore = document.querySelector(".read_more");

  if (item.title) {
    const title = readMore.querySelector(".title");
    title.textContent = item.title;
  }

  if (item.subtitle) {
    const subtitle = readMore.querySelector(".subtitle");
    subtitle.textContent = item.subtitle;
  }

  if (item.description) {
    const description = readMore.querySelector(".description");
    description.textContent = item.description;
  }

  if (item.topics) {
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

  if (item.members) {
    const members = readMore.querySelector(".members");
    members.innerHTML = "";
    for (const member of item.members) {
      const listItem = document.createElement("li");
  
      const name = document.createElement("h3");
      name.textContent = member.name;
      listItem.appendChild(name);
  
      const profession = document.createElement("span");
      profession.textContent = member.profession;
      listItem.appendChild(profession);
  
      const experience = document.createElement("span");
      experience.textContent = member.experience;
      listItem.appendChild(experience);

      const answer = document.createElement("span");
      answer.textContent = member.answer;
      listItem.appendChild(answer);

      const specializations = document.createElement("ul");
      specializations.classList.add("specializations_list");

      for (const specialization of member.specializations) {
        const item = document.createElement("li");
  
        const ask = document.createElement("p");
        ask.textContent = specialization.title;
        item.appendChild(ask);
    
        const answer = document.createElement("span");
        answer.textContent = `(${specialization.institution})`;
        item.appendChild(answer);
    
        specializations.appendChild(item);
      }
      members.appendChild(listItem);
    }
  }
}

ReadMore.toggle = () => {
  const readMore = document.querySelector(".read_more");
  const fade = document.querySelector(".read_more_fade");
  fade.addEventListener("click", () => ReadMore.toggle());
  const isClosed = readMore.classList.contains("hide")
  if (isClosed) {
    readMore.classList.remove("hide");
    fade.classList.remove("hide");
  } else {
    readMore.classList.add("hide");
    fade.classList.add("hide");
  }
}