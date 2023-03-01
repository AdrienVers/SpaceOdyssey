import { create } from "zustand";

interface Store {
	selectedPlanet: string;
	setSelectedPlanet: (planet: string) => void;
	openModal: boolean;
	setOpenModal: (open: boolean) => void;
	nameId: string | null;
	setNameId: (planetNameId: string) => void;
	name: string | null;
	setName: (planetName: string) => void;
	type: string | null;
	setType: (planetType: string) => void;
	flight: string | null;
	setFlight: (planetFlight: string) => void;
	distance: string | null;
	setDistance: (planetDistance: string) => void;
	imageURL: string;
	setImageURL: (planetImageURL: string) => void;
	gravity: number | null;
	setGravity: (planetGravity: number) => void;
	revolution: number | null;
	setRevolution: (planetRevolution: number) => void;
	diameter: number | null;
	setDiameter: (planetDiameter: number) => void;
	description: string | null;
	setDescription: (planetDescription: string) => void;
	openSidebar: boolean;
	setOpenSidebar: (openS: boolean) => void;
}

export const useStore = create<Store>((set) => ({
	selectedPlanet: "mars",
	setSelectedPlanet: (planet: string) =>
		set(() => ({ selectedPlanet: planet })),

	openModal: true,
	setOpenModal: (open: boolean) => set(() => ({ openModal: open })),

	nameId: null,
	setNameId: (planetNameId: string) => set({ nameId: planetNameId }),

	name: null,
	setName: (planetName: string) => set({ name: planetName }),

	type: null,
	setType: (planetType: string) => set({ type: planetType }),

	flight: null,
	setFlight: (planetFlight: string) => set({ flight: planetFlight }),

	distance: null,
	setDistance: (planetDistance: string) => set({ distance: planetDistance }),

	imageURL: "https://i.imgur.com/xEVy0nj.png",
	setImageURL: (planetImageURL: string) => set({ imageURL: planetImageURL }),

	gravity: null,
	setGravity: (planetGravity: number) => set({ gravity: planetGravity }),

	revolution: null,
	setRevolution: (planetRevolution: number) =>
		set({ revolution: planetRevolution }),

	diameter: null,
	setDiameter: (planetDiameter: number) => set({ diameter: planetDiameter }),

	description: null,
	setDescription: (planetDescription: string) =>
		set({ description: planetDescription }),

	openSidebar: false,
	setOpenSidebar: (openS: boolean) => set(() => ({ openSidebar: openS })),
}));
