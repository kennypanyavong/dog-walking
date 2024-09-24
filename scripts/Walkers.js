import { getWalkers } from "./database.js"

document.addEventListener(
    "click",
    (theClickEvent) => {
        const whatWasClickedOn = theClickEvent.target
        window.alert(`This walker works in ${whatWasClickedOn.dataset.city}`)
    }
)

export const Walkers = () => {
    const walkers = getWalkers()
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li  data-id="${walker.id}"
                            data-city="${walker.city}"
                                >${walker.name}
                        </li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML

}

