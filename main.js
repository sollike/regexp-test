const str = `
010-1233-4232
kikiu@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
aaabbbcccddd
`

console.log(
  str.match(/(?<=@).{1,}/g)
)