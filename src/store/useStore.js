import { create } from "zustand";

export const useStore = create((set) => ({
	selectedPlanet: "mars",
	setSelectedPlanet: (planet) => set(() => ({ selectedPlanet: planet })),

	openModal: true,
	setOpenModal: (open) => set(() => ({ openModal: open })),

	nameId: null,
	setNameId: (planetNameId) => set({ nameId: planetNameId }),

	name: null,
	setName: (planetName) => set({ name: planetName }),

	type: null,
	setType: (planetType) => set({ type: planetType }),

	flight: null,
	setFlight: (planetFlight) => set({ flight: planetFlight }),

	distance: null,
	setDistance: (planetDistance) => set({ distance: planetDistance }),

	imageURL: "https://i.imgur.com/xEVy0nj.png",
	setImageURL: (planetImageURL) => set({ imageURL: planetImageURL }),

	gravity: null,
	setGravity: (planetGravity) => set({ gravity: planetGravity }),

	revolution: null,
	setRevolution: (planetRevolution) => set({ revolution: planetRevolution }),

	diameter: null,
	setDiameter: (planetDiameter) => set({ diameter: planetDiameter }),

	description: null,
	setDescription: (planetDescription) =>
		set({ description: planetDescription }),

	openSidebar: false,
	setOpenSidebar: (openS) => set(() => ({ openSidebar: openS })),
}));
