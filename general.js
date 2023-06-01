const NullTheme = 0;
const DarkTheme = 1;
const WhiteTheme = 2;

function ClearFlash()
{
	document.querySelectorAll("*").forEach
	(
		(Elem) =>
		{
			if (localStorage.getItem("Theme") == DarkTheme)
			{
				Elem.style.backgroundColor = "rgb(30, 30, 30)";
			}
			else if (localStorage.getItem("Theme") == WhiteTheme)
			{
				Elem.style.backgroundColor = "rgb(200, 200, 200)";
			}
		}
	);
}

function Flash()
{
	document.querySelectorAll("*").forEach
	(
		(Elem) =>
		{
			Elem.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
		}
	);

	setTimeout(ClearFlash, Math.random() * 100 + 200);
}

function SwapTheme()
{
	let Theme = localStorage.getItem("Theme");

	switch (Theme)
	{
	case `${DarkTheme}`:
	{
		localStorage.setItem("Theme", WhiteTheme);

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
	case `${WhiteTheme}`:
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

function OnBodyKeyPress(EventData)
{
	if (EventData.key == "t")
	{
		SwapTheme();
	}
}

function OnThemeButtonClick(EventData)
{
	EventData.stopPropagation();

	SwapTheme();
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
	else if (localStorage.getItem("Theme") == WhiteTheme)
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

let Footer = document.querySelector("footer");
Footer.parentNode.removeChild(Footer);

document.body.addEventListener("keydown", OnBodyKeyPress);

window.onload = OnLoad;

setInterval(Flash, 2000);
