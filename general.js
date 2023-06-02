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

function SwapTheme(DomObj)
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

		DomObj.innerHTML = "Switch theme to dark";

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

		DomObj.innerHTML = "Switch theme to white";

		break;
	}
	}
}

function OnBodyKeyPress(EventData)
{
	if (EventData.key == "t")
	{
		SwapTheme(document.querySelector(".ThemeButton"));
	}
}

function OnThemeButtonClick(EventData)
{
	EventData.stopPropagation();

	SwapTheme(EventData.target);
}

function OnLoad()
{
	let ThemeButton = document.createElement("button");

	ThemeButton.addEventListener("click", OnThemeButtonClick);
	ThemeButton.classList.add("ThemeButton");

	ThemeButton.style.width = "100%";
	ThemeButton.style.height = "3em";
	ThemeButton.style.backgroundColor = "rgb(20, 20, 20)";

	ThemeButton.style.color = "rgb(80, 140, 100)";
	ThemeButton.style.display = "flex";
	ThemeButton.style.alignItems = "center";
	ThemeButton.style.justifyContent = "center";
	ThemeButton.style.borderRadius = "20px";
	ThemeButton.style.borderWidth = "0px";

	document.body.appendChild(ThemeButton);

	let ComputedStyle = window.getComputedStyle(ThemeButton);

	console.log(ComputedStyle.height);

	if (localStorage.getItem("Theme") == DarkTheme)
	{
		ThemeButton.innerHTML = "Switch theme to white";
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
		ThemeButton.innerHTML = "Switch theme to dark";
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

let Today = new Date();

if (Today.toString().split(" ")[2] == 1)
{
	alert("Welcome");
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
