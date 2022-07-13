
const spend = [
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
]

document.querySelectorAll(".graphics").forEach((graphic, index) => {
	let toast = document.getElementsByClassName("day-spending-amount")[index]
	graphic.addEventListener("mouseover", e => {
		let data = e.target.getAttribute("data-week-day")
		spend.forEach(spending_info => {
			if(spending_info.day == data){
				toast.innerHTML = `$${spending_info.amount}`
				toast.style.display = "initial"
			}
		})
	})
	graphic.addEventListener("mouseout", () => {
		toast.style.display = "none"
	})
})