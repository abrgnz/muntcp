function mostrar (caso)
{
    var id = caso.id;
	var a = document.getElementById(id);
	a.style.display = 'none';
	
	
	
	for(var i=1;i<=22;i++){
		if (id!='comite'+i)
		{
			a = document.getElementById('comite'+i);
			a.style.display= 'block';
		}
	}

	
}

function show () 
{
	for(var i=1;i<=22;i++)
	{
			a = document.getElementById('comite'+i);
			a.style.display= 'block';
	}

	
}