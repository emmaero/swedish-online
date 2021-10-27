import iFileLink from "./iFileLink";
import iVideoLink from "./iVideoLink";

 export default interface iCourse {
   id: string;
   title: string;
   videos: iVideoLink[];
   files: iFileLink[];
 }