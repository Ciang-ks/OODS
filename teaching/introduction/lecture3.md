今天晚上是数据科学面面观的第三节课, 是由赵东岩教授讲授自然语言处理, 这是他的[主页](https://www.icst.pku.edu.cn/zhaodongyan/)

自然语言处理的进展是本次ai浪潮的一个主要推动: gpt架构最开始就是一个基于transformer的自然语言处理的工具, 根据给的一句话预测下一个单词; 还有基于transformer的bert模型, 用来"完形填空", 根据两侧的词预测, 同学们可以了解一下bert模型和gpt模型在训练方法上的差异

这个方向就有一个有趣的问题, 机器如何理解自然语言中的意义? 赵东岩老师曾经做的是语义知识库, 通过语法句法的规则, 例如建立主谓宾的句子来解释语义知识; 现在大模型往往用的是词嵌入, 通过深度学习将一个词语转换到高维度空间的一个向量, 不同的维度表征不同的含义, 比如 king 和 queen 的向量差与 man woman 的相同; 同学们可以想这么一个问题, 在词嵌入中, 随着时间的演化, 哪些词语是近似保守的(或者说不动的), 比如代词"I"在不同时代一直都代表自己的意思, 而"坤"就会发生一个意义的偏移和流变

赵东岩老师曾经随山鹰社攀登珠峰, 这是他的[故事](https://pku.org.cn/info/1208/4378.htm)

reference:
https://en.wikipedia.org/wiki/Word_embedding
https://en.wikipedia.org/wiki/Generative_pre-trained_transformer
https://en.wikipedia.org/wiki/BERT_(language_model)
https://scholar.google.com/citations?user=lhR8-68AAAAJ&hl=zh-CN