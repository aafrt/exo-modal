let modalBg = document.createElement("div");
// model
	function createModal(content,title,contentModalClass,width="DEFAULT",height="DEFAULT",location = document.body)
	{
		// modal background
		modalBg.setAttribute("class","modal-bg"); 
		modalBg.classList.add("modal-active");

		// main modal div
		let modal = document.createElement("div");
		modal.setAttribute("class","main-modal");
		if(width != "DEFAULT")
		{
			modal.style.width = width;
		}

		if(height != "DEFAULT")
		{
			modal.style.height = height;
		}


		// modal content div
		let modalContent = document.createElement("div");
		modalContent.setAttribute("class","modal-content");


		// append content to modal content
		// modalContent.insertAdjacentElement("beforeend",content);
		modalContent.innerHTML = content;
		modalContent.setAttribute("class",contentModalClass);

		// modal close button
		let closeBtn = document.createElement("span"); 
		closeBtn.textContent = "+";
		closeBtn.setAttribute("class","close-btn");

		// appending title, close button and modal content to modal
		if(title != null)
		{
			let titleDiv = document.createElement("div");
			titleDiv.innerHTML = title;
			titleDiv.setAttribute("class","title-div"); 
			modal.append(titleDiv)
		}
		modal.appendChild(closeBtn);
		modal.appendChild(modalContent);


		// appending modal content div to modal background
		modalBg.appendChild(modal);

		// close modal
		
		// close modal by double click o backgrond
		modalBg.addEventListener("click",function(e)
		{
			if(e.detail  === 3)
			{
			 closeModal();
			}
		})

		// close modal by clciking close button
		closeBtn.addEventListener("click", function()
		{
			 closeModal();
		})

		// close modal by pressing "ESC" ,'esc' button on keyboard
		document.addEventListener("keyup",function(e) {
	    	 if (e.key === "Escape") {
	     		 closeModal();
	   		 }
		});

		// showing modal
		location.appendChild(modalBg);
		// return modalBg;
	}


	function closeModal()
	{
		// modalBg.innerHTML = "";
		modalBg.removeChild(document.querySelector(".main-modal"))
		modalBg.classList.remove("modal-active");
	}

// checking if there is a modal button or not
if(document.getElementsByClassName("modal-button").length > 0)
{
	if(document.getElementsByClassName('modal').length == 0 )
	{
		alert("Please create a div with class  of modal and add 'data-modal' attribute '=' to data-modal attr on your button; it can be anything");
		// break;
	}

	// modal button's created by you
	const modalButton = document.getElementsByClassName("modal-button"); 		
	// looping through all buttons and storing there data-modal attr
	for(let mb = 0; mb < modalButton.length; mb++){
		
		// adding a event listnear
		modalButton[mb].addEventListener("click",function()
		{
			// store button data modal attr in a const
			const buttonDataModalAttr  = this.getAttribute("data-modal");

			// all modals
			const getModal = document.getElementsByClassName('modal');
			// loop through all modals
			for(let mdlB = 0; mdlB < getModal.length; mdlB++){
				const modalDataModalAttr = getModal[mdlB].getAttribute("data-modal")
				if(modalDataModalAttr == buttonDataModalAttr)
				{
					let title= null;
					if(document.getElementsByClassName('modal').length != null)
					{
						 const getTitle = document.getElementsByClassName('modal-title');
						if(getTitle.length > 0)
						{
							for(let til = 0; til < getTitle.length; til++){
								let titleDataModalAttr = getTitle[til].getAttribute("data-modal");
								if(titleDataModalAttr == modalDataModalAttr)
								{
									title = getTitle[til].textContent;
									break;
								}
								else
								{
									break;
								}
							}
						}
				
					}
					//  checking title 
					if(getModal[mdlB].getAttribute("data-title") != null)
					{
						 title = getModal[mdlB].getAttribute("data-title")
					}

					//  checking if their is width 
					let modalWidth = 'DEFAULT';
					if(getModal[mdlB].getAttribute("data-width") != null)
					{
						 modalWidth = getModal[mdlB].getAttribute("data-width")
					}

					let modalHeight =  'DEFAULT';
					 // checking if their is height for modal
					if(getModal[mdlB].getAttribute("data-height") != null)
					{
						modalHeight = getModal[mdlB].getAttribute("data-height")
					}
					// creating a modal 
					const content = getModal[mdlB].innerHTML;
					let modalClassess = getModal[mdlB].getAttribute("class");
					modalClassess = modalClassess.replace('modal','')
					console.log(title)
	   				createModal(content,title,modalClassess,modalWidth,modalHeight);
	   				break;
				}
			}
		})
	}
}
