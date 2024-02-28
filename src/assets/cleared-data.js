import { v4 as uuidv4 } from "uuid";

const clearedData = {
  personal: [
    {
      id: uuidv4(),
      name: "",
      title: "",
      email: "",
      phone: "",
      location: "",
    }
  ],
  experience: [
    {
      id: uuidv4(),
      name: "",
      position: "",
      description: "",
      start_date: "",
      end_date: "",
      location: "",
    },
    {
      id: uuidv4(),
      name: "",
      position: "",
      description: "",
      start_date: "",
      end_date: "",
      location: "",
    },
    {
      id: uuidv4(),
      name: "",
      position: "",
      description: "",
      start_date: "",
      end_date: "",
      location: "",
    },
  ],
  education: [
    {
      id: uuidv4(),
      name: "",
      degree_certification: "",
      area_of_focus: "",
      start_date: "",
      end_date: "",
      location: "",
    },
    {
      id: uuidv4(),
      name: "",
      degree_certification: "",
      area_of_focus: "",
      start_date: "",
      end_date: "",
      location: "",
    },
  ],
  skills: [
    {
      id: uuidv4(),
      skill: "",
    },
  ],
};

export default clearedData;
