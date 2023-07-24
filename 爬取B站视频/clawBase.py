'''
    爬取一个视频并且将其保存
    https://github.com/Nemo2011/bilibili-api/blob/main/docs/modules/comment.md
'''
import os
import asyncio
import json
from bilibili_api import video,comment,bvid2aid,sync
infoPath = "D:\Code\clawVideos\info"
class ClawVideo:
    def __init__(self,bv="BV1uv411q7Mv"):
        self.bv = bv
        self.video = video.Video(bvid=bv)
        self.info,self.comments,self.danmaku,self.tags = [],[],[],[]
    def getInfos(self):
        self.info = sync(self.getBaseInfo())
        self.tags = sync( self.getTags())
        self.danmaku = sync( self.getDanmaku())
        self.comments =sync(self.getComment())
    def outputAsJson(self):
        temDict = {
            "_id":self.bv,
            "baseInfo":self.info,
            "tags":self.tags,
            "comment":self.comments,
            "danmaku":self.danmaku
        }
        aimfile = os.path.join(infoPath,f"{self.bv}.json")
        with open(aimfile,"w",encoding='utf-8') as f: 
            json.dump(temDict,f,ensure_ascii=False)
    async def  getBaseInfo(self):
        info = await self.video.get_info()
        return info
    async def getTags(self):
        tags = await self.video.get_tags()
        tags = [i["tag_name"] for i in tags]
        return tags
    async def getDanmaku(self):
        '''出错了需要自己的手段'''
        danmakus = await self.video.get_danmakus(page_index=0)
        '''text,dm_time,send_time'''
        danmakus = [{"content":i.text,"send_time":i.send_time,"video_time":i.dm_time} for i in danmakus]
        return danmakus
    async def getComment(self):
        comments,count = [],0
        page = 1
        while True:
            c = await comment.get_comments(bvid2aid(self.bv),comment.CommentResourceType.VIDEO,page)
            comments.extend(c['replies'])
            count += c['page']['size']
            if count >= c['page']['size']:
                break
        # for i in comments:
        comments  = [i['content']['message'] for i in comments]
        return comments
    def printContent(self):
        print("==============baseInfo=============")
        print(self.info)
        print("==============Tags=============")
        print(self.tags)
        print("==============danmaku=============")
        print(self.danmaku)
        print("==============comment=============")
        print(self.comments)
        




if __name__ == '__main__':
    oneVideo = ClawVideo()
    # asyncio.get_event_loop().run_until_complete(oneVideo.getAllInfo())
    oneVideo.getInfos()
    oneVideo.outputAsJson()