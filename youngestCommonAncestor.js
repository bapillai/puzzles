//Write a function that take the ancestral node and two descendant nodes and returns the youngest common ancestor between the two descendant nodes.

class StartAncestralTree {
    constructor(name) {
      this.name = name;
      this.ancestor = null;
    }
  }
  
  
  class AncestralTree extends StartAncestralTree {
    constructor(name) {
      super(name);
    }
  
    addAsAncestor(descendants) {
      for (const descendant of descendants) {
        descendant.ancestor = this;
      }
    }
  }
  
  const ancestralTrees = {};
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  for (const letter of ALPHABET) {
    ancestralTrees[letter] = new AncestralTree(letter);
  }
  ancestralTrees.A.addAsAncestor([
    ancestralTrees.B,
    ancestralTrees.C,
    ancestralTrees.D,
    ancestralTrees.E,
    ancestralTrees.F,
  ]);
  ancestralTrees.B.addAsAncestor([ancestralTrees.G, ancestralTrees.H, ancestralTrees.I]);
  ancestralTrees.C.addAsAncestor([ancestralTrees.J]);
  ancestralTrees.D.addAsAncestor([ancestralTrees.K, ancestralTrees.L]);
  ancestralTrees.F.addAsAncestor([ancestralTrees.M, ancestralTrees.N]);
  ancestralTrees.H.addAsAncestor([ancestralTrees.O, ancestralTrees.P, ancestralTrees.Q, ancestralTrees.R]);
  ancestralTrees.K.addAsAncestor([ancestralTrees.S]);
  ancestralTrees.P.addAsAncestor([ancestralTrees.T, ancestralTrees.U]);
  ancestralTrees.R.addAsAncestor([ancestralTrees.V]);
  ancestralTrees.V.addAsAncestor([ancestralTrees.W, ancestralTrees.X, ancestralTrees.Y]);
  ancestralTrees.X.addAsAncestor([ancestralTrees.Z]);
  
  
  function getYoungestCommonAncestor(topAncestor,descendantOne,descendantTwo){
    let depthOne = getDescendantDepth(descendantOne,topAncestor);
    let depthTwo = getDescendantDepth(descendantTwo,topAncestor);
    if(depthOne > depthTwo){
      return backTrackAncestralTree(descendantOne,descendantTwo,depthOne-depthTwo);
    } else {
      return backTrackAncestralTree(descendantTwo,descendantOne,depthTwo-depthOne);
    }
  }
  
  function getDescendantDepth(descendant, topAncestor){
    let depth = 0;
    while(descendant !== topAncestor){
      depth++;
      descendant = descendant.ancestor;
    }
    return depth;
  }
  
  function backTrackAncestralTree(lowerDescendant,higherDescendant,diff){
    while(diff > 0){
      lowerDescendant = lowerDescendant.ancestor;
      diff--;
    }
    while(lowerDescendant !== higherDescendant){
      lowerDescendant = lowerDescendant.ancestor;
      higherDescendant = higherDescendant.ancestor;
    }
    return lowerDescendant;
  }
  
  
  console.log(getYoungestCommonAncestor(ancestralTrees.A, ancestralTrees.A, ancestralTrees.B))