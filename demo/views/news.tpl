<!-- News template-->
<uL class="list">
    {{ 
		for(var i=0;i<it.length;i++){
    }}
    <li>
        <a href="#newsDetails/details/{{=it[i].id}}">
            <h4>{{=it[i].title}}</h4>
            <span>{{=it[i].pubDate}}</span>
            <p>{{=it[i].intro}}</p>
        </a>
    </li>
    {{
		}
    }}
</uL>
