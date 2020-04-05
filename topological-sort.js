 //Given a list of jobs that needs to be completed in the form of integers.We are also given a list of dependencies.A dependency is represented as a pair of jobs where the first job is a prerequisite to the second one.In other words,second job is a prerequisite to completing the first job and so on.Write a function that takes these two lists and then outputs a list containing a valid order in which the jobs can be completed.If not such order exists,the function should return an empty list.Time COmplexity:O(j+D);
//Performed on a directed graph
//Input: jobs:[1,2,3,4] Dependancies:[[1,2],[1,3],[3,2],[4,2],[4,3]];
//Output: [1,4,3,2] pr [4,1,3,2].

function topologicalSort(jobs,dependencies){
    let jobGraph = createJobGraph(jobs,dependencies);
    return getOrderedJobs(jobGraph);
  }
  
  function createJobGraph(jobs,dependencies){
    const graph = new JobGraph(jobs);
    for(const [prereq,job] of dependencies){
      graph.addPrereq(job,prereq);
    }
    return graph;
  }
  
  function getOrderedJobs(graph){
    let orderedJobs = [];
    let {nodes} = graph;
    while(nodes.length){
      const node = nodes.pop();
      const containsCycle = depthFirstSearch(node,orderedJobs);
      if(containsCycle) {
        return [];
      } 
    }
    return orderedJobs;
  }
  
  function depthFirstSearch(node, orderedJobs){
    if(node.visited) {
      return false;
    }
    if(node.visiting){
      return true;
    }
    node.visiting = true;
    for(const prereqNode of node.prereqs){
      const containsCycle = depthFirstSearch(prereqNode, orderedJobs);
      if(containsCycle) {
        return true;
      }
    }
    node.visited = true;
    node.visiting = false;
    orderedJobs.push(node.job);
    return false;
  }
  
  class JobGraph{
    constructor(jobs){
      this.nodes = [];
      this.graph = {};
      for(const job of jobs){
        this.addNode(job);
      }
    }
    addNode(job){
      this.graph[job] = new JobNode(job);
      this.nodes.push(this.graph[job]);//helps us iterate through our node easily
    }
    getNode(job){
      if(!(job in this.graph)){
        this.addNode(job);
      }
      return this.graph[job];
    }
    addPrereq(job,prereq){
      let jobNode = this.getNode(job);
      let prereqNode = this.getNode(prereq);
      jobNode.prereqs.push(prereqNode);
    }
  }
  
  class JobNode{
    constructor(job){
      this.job = job;
      this.prereqs = [];
      this.visited = false;
      this.visiting = false;
    }
  }
  
  topologicalSort([1,2,3,4],[[1,2],[1,3],[3,2],[4,2],[4,3]]);