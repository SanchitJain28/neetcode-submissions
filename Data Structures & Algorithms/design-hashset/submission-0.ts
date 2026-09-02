class MyHashSet {
  private size: number
  private buckets: number[][]
  constructor() {
    this.size = 1009
    this.buckets = Array.from({ length: this.size }, () => [])
  }

  private hash(key: number) {
    return key % this.size
  }

  add(key: number): void {
    const index = this.hash(key)
    const bucket = this.buckets[index]

    if (!bucket.includes(key)) bucket.push(key)
  }

  remove(key: number): void {
    const index = this.hash(key)
    const bucket = this.buckets[index]
    const i = bucket.indexOf(key)
    if(i!==-1) bucket[i] = -1
  }

  contains(key: number): boolean {
    const index = this.hash(key)
    const bucket = this.buckets[index]
    return bucket.includes(key)
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
