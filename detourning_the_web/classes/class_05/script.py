from pattern.en import ngrams
from collections import Counter
from videogrep import videogrep
import sys

filename = sys.argv[1]
srt_name = filename.replace('.mp4', '.srt')

lines = open(srt_name).read()
grams = ngrams(lines, n=3)

most_common = Counter(grams).most_common(10)
search_phrase = most_common[0][0]
search_phrase = ' '.join(search_phrase)
# for phrase in most_common:
#     print ' '.join(phrase[0])

videogrep([filename], filename+".most_common.mp4", search_phrase,'re')
