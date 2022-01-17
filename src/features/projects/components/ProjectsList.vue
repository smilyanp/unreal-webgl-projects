<script>
import { getFirestore, collection, getDocs } from "firebase/firestore"; 
export default {
  name: 'ProjectsList',
  data () {
    return {
      projects: [],
    }
  },
  async created () {
    const db = getFirestore();
    const projectsRef = await getDocs(collection(db, "projects"));

    projectsRef.forEach((doc) => {
      this.projects.push(doc.data());
    });
  }
};
</script>

<template>
    <h1>Projects list</h1>
    <p>List of projects</p>
    <ul>
      <li v-for="project in projects" :key="project.name">
        Name: {{project.name}}<br />
        Client: {{project.client}}<br />
      </li>
    </ul>
    <div style="background: #fff; width: 200px; height: 50px; position: relative; top: 50px; right: 0; float: right;"></div>
    <iframe src="https://twinmotion.unrealengine.com/presentation/9JkK5cyD2PIuAOFH" style="width: 100%; height: 80vh"></iframe>
</template>

<style>

</style>
