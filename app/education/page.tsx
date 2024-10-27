import Image from "next/image";
import Navbar from "../component/page";

export default async function Education() {
await new Promise((resolve) => setTimeout(resolve, 5000));


   
  return (
    <div className="box-border h-32 p-20 ">
      <div className="bg-blue-900 p-20">
      
      <p className="bg-blue-200 p-8">"I have a BSc in Medical Science, which has provided me with a strong foundation in scientific principles and problem-solving 
         skills. Now, I am pursuing a course in AI generative technologies and the metaverse with the aim of becoming a skilled web
          developer. My focus is on combining my scientific background with the latest technologies to create innovative web solutions
           that can transform user experiences and push the boundaries of what's possible in the digital world."

</p>
</div>
    </div>
  );
}

  