'''
    创造一个等待的list
'''
from bilibili_api import video,sync
seed = "BV1vD4y1i7kC"
try:
    with open("seed.txt","r",encoding='utf-8') as aimFile:
        seeds = aimFile.readlines()
        seeds = [i.strip("\n") for i in seeds]
except:
    seeds = [seed]
if len(seeds) == 0:
    seeds = [seed]
waitingBvs = []
try:
    with open("waitingBvs.txt","r",encoding='utf-8') as aimFile:
        waitingBvs = [i.strip("\n") for i in aimFile.readlines()]
except:
    pass
waitingBvs = set(waitingBvs)
preLen = 0
while len(waitingBvs) < 300000:
    print(len(waitingBvs))
    if len(waitingBvs)-preLen>1000:
        preLen = len(waitingBvs)
        with open("waitingBvs.txt","w",encoding="utf-8") as aimFile:
            temWaits = list(waitingBvs)
            for i in temWaits:
                aimFile.write(i+"\n")
        with open("seeds.txt","w",encoding="utf-8") as aimFile:
            for i in seeds:
                aimFile.write(i+"\n")
    # 进入
    v = video.Video(bvid=seeds[0])
    seeds = seeds[1:]
    records = sync(v.get_related())
    records = [i["bvid"] for i in records]
    waitingBvs.update(records)
    if len(seeds)<100000:
        seeds.extend(records)
    # break