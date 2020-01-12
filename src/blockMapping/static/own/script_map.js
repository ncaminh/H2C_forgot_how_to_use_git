const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
	button.addEventListener('click', () => {
		const modal = document.querySelector(button.dataset.modalTarget)
		openModal(modal)
	})
})

closeModalButtons.forEach(button => {
	button.addEventListener('click', () => {
		const modal = button.closest('.modal')
		closeModal(modal)
	})
})

function openModal(modal) {
	if (modal == null) return;
	modal.classList.add('active')
	overlay.classList.add('active')
}

function closeModal(modal) {
	if (modal == null) return;
	modal.classList.remove('active')
	overlay.classList.remove('active')
}


/*________________________________________________________________________________________________*/

for (var i=0, len = all_diseases.length; i<len; i++) {
  all_diseases[i].onclick = updateDict;
}

function updateDict(e) {
  if (this.checked) {
    choices[this.value] = this.value;
  } else {
     if (choices.hasOwnProperty(this.value)) {
        delete choices[this.value];
     }
  }
}


function create_table(zone_code, zone_name) {
	current_dist = zone_code;
	var info = json_dict_full[zone_code];
	total_rows = info[0].length + 1;
	total_columns = info[1].length + 1;
	var choices_indexes = [];

	for (choice in choices) {
		temp = info[1].findIndex(element => element == choice);
		if (temp > -1) choices_indexes.push(temp);
	}


	var mytable = '<table border=1><tr>' + zone_name + '</tr>';

	for (var row = 0; row < total_rows; row ++) {
		mytable += '<tr>';

		if (row == 0) {
			mytable += '<td>Sub zone</td>';
		} else {
			mytable += '<td>' + info[0][row - 1]  + '</td>';
		}

		for (col of choices_indexes) {
			mytable += '<td>' + info[row+1][col]  + '</td>';
		}

		mytable += '</tr>';

	}

	mytable += '</table>';

	//document.getElementById('table_place').innerHTML = '<p>aaa</p>';
	document.getElementById('table_place').innerHTML = mytable;
};

function expandTable() {
  var tempo = [];
  var choices_indexes = [];
  var info = json_dict_full[current_dist];

  if (current_dist == "") {
  	document.getElementById('modal-body').innerHTML = "Please choose a district first";
  } else {
    for (choice in choices) {
      tempo = tempo.concat(mapping_dict[choices[choice]]);
    }

    for (index = 0; index < tempo.length; index++) {
      temp = info[1].findIndex(element => element == tempo[index]);
      if (temp > -1) choices_indexes.push(temp);
    }

    var mytable = '<table border=1><tr>' + current_dist + '</tr>';

    for (var row = 0; row < total_rows; row ++) {
      mytable += '<tr>';

      if (row == 0) {
        mytable += '<td>Sub zone</td>';
      } else {
        mytable += '<td>' + info[0][row - 1]  + '</td>';
      }

      for (col of choices_indexes) {
        mytable += '<td>' + info[row+1][col]  + '</td>';
      }

      mytable += '</tr>';
      
    }

    mytable += '</table>';
    document.getElementById('modal-body').innerHTML = mytable;
  }
}