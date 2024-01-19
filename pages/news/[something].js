import { useRouter } from "next/router";
// pages/index.js
function HomePage() {
  const router=useRouter();
  console.log(router.query.something)
    return <div>Something</div>;
  }
  
  export default HomePage;
  