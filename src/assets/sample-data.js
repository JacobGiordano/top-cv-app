import { v4 as uuidv4 } from "uuid";

const sampleData = {
  personal: [
    {
      id: uuidv4(),
      name: "John Doe",
      email: "johndoe@email.com",
      phone: "555-555-5555",
      location: "Anywhere and everywhere",
    }
  ],
  experience: [
    {
      id: uuidv4(),
      name: "Job",
      position: "Person",
      description: "Did something",
      start_date: "Jan 1, 20xx",
      end_date: "Dec 31, 20xx",
      location: "Someplace",
    },
    {
      id: uuidv4(),
      name: "Job 2",
      position: "Person 2",
      description: "Did something 2",
      start_date: "Jan 1, 20xx 2",
      end_date: "Dec 31, 20xx 2",
      location: "Someplace 2",
    },
    {
      id: uuidv4(),
      name: "Job 3",
      position: "Person 3",
      description: "Did something 3",
      start_date: "Jan 1, 20xx 3",
      end_date: "Dec 31, 20xx 3",
      location: "Someplace 3",
    },
  ],
  education: [
    {
      id: uuidv4(),
      name: "School",
      degree_certification: "Certificate",
      area_of_focus: "Something cool",
      start_date: "Jan 1, 20xx",
      end_date: "Dec 31, 20xx",
      location: "Someplace",
    },
    {
      id: uuidv4(),
      name: "School 2",
      degree_certification: "Certificate 2",
      area_of_focus: "Something cool 2",
      start_date: "Jan 1, 20xx 2",
      end_date: "Dec 31, 20xx 2",
      location: "Someplace 2",
    },
  ],
  skills: [
    {
      id: uuidv4(),
      skill: "Bo staff skillz",
    },
  ],
};

export default sampleData;
