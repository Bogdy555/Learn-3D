const NullTheme = 0;
const DarkTheme = 1;
const LightTheme = 2;

function OnThemeButtonClick(EventData)
{
	EventData.stopPropagation();

	let Theme = localStorage.getItem("Theme");

	switch (Theme)
	{
	case `${DarkTheme}`:
	{
		localStorage.setItem("Theme", LightTheme);

		let MyDom = document.querySelectorAll("*");

		MyDom.forEach
		(
			(Elem) =>
			{
				Elem.style.color = "rgb(30, 30, 30)";
				Elem.style.backgroundColor = "rgb(200, 200, 200)";
			}
		);

		break;
	}
	case `${LightTheme}`:
	{
		localStorage.setItem("Theme", DarkTheme);

		let MyDom = document.querySelectorAll("*");

		MyDom.forEach
		(
			(Elem) =>
			{
				Elem.style.color = "rgb(200, 200, 200)";
				Elem.style.backgroundColor = "rgb(30, 30, 30)";
			}
		);

		break;
	}
	}
}

function OnLoad()
{
	let ThemeButton = document.createElement("div");

	ThemeButton.addEventListener("click", OnThemeButtonClick);
	ThemeButton.setAttribute("id", "ThemeButton");

	ThemeButton.style.width = "100%";
	ThemeButton.style.height = "3em";
	ThemeButton.style.backgroundColor = "rgb(20, 20, 20)";

	ThemeButton.innerHTML = "Switch theme";
	ThemeButton.style.color = "rgb(80, 140, 100)";
	ThemeButton.style.display = "flex";
	ThemeButton.style.alignItems = "center";
	ThemeButton.style.justifyContent = "center";

	document.body.appendChild(ThemeButton);

	if (localStorage.getItem("Theme") == DarkTheme)
	{
		document.querySelectorAll("*").forEach
		(
			(Elem) =>
			{
				Elem.style.color = "rgb(200, 200, 200)";
				Elem.style.backgroundColor = "rgb(30, 30, 30)";
			}
		);
	}
	else if (localStorage.getItem("Theme") == LightTheme)
	{
		document.querySelectorAll("*").forEach
		(
			(Elem) =>
			{
				Elem.style.color = "rgb(30, 30, 30)";
				Elem.style.backgroundColor = "rgb(200, 200, 200)";
			}
		);
	}
}

if (localStorage.getItem("Theme") == NullTheme)
{
	localStorage.setItem("Theme", DarkTheme);
}

window.onload = OnLoad;
