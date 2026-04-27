import axios from "axios";

export default axios.create({
  // 7. In rawg -> API -> Read documentation -> scroll down to fined ->
  // GET /games and copy it
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "df7ce21b6f384dbf840a061794936eda",
  },
});

// 1. rawg.io -> Sign Up -> Get an API Key
// 2. Give your name and in describe -> I would like to learn how to fetch API
// 3. Now Copy the API Key. Done

// 4. Now -> npm i axios
// 5. In src folder -> New Folder and call it -> services
// 6. In services -> Add New File -> api-client.ts

// 8. Now create a new component in components -> GameGrid.tsx (Next PIC)
