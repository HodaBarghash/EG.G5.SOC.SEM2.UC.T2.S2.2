function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5YcBB4or21b":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbzfFVAjGRMNkvDdXa0V0qE_EnmF68zIEs_pnBVQMuWCkqCbqxtJO8mXhU4UXfRRE9PdOg/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

