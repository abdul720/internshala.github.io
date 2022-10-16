
fetch("assignmentDatas.json")
.then(function(response){
	return response.json();
})
.then(function(assignmentDatas){
	let placeholder = document.querySelector("#data-output");
	let out = "";
	for(let assignmentData of assignmentDatas){
		out += `
			<tr>
				<td>${assignmentData.end_year}</td>
				<td>${assignmentData.intensity}</td>
				<td>${assignmentData.sector}</td>
				<td>${assignmentData.topic}</td>
				<td>${assignmentData.insight}</td>
                <td><a href="${assignmentData.url}">url</td>
                <td>${assignmentData.region}</td>
				<td>${assignmentData.start_year}</td>
				<td>${assignmentData.impact}</td>
                <td>${assignmentData.country}</td>
                <td>${assignmentData.relevance}</td>
				<td>${assignmentData.pestle}</td>
                <td>${assignmentData.source}</td>
                <td>${assignmentData.title}</td>
				<td>${assignmentData.likelihood}</td>
                <td>${assignmentData.year}</td>
                <td>${assignmentData.id}</td>


			</tr>
		`;
	}

	placeholder.innerHTML = out;
});