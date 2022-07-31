"""
Created on Sat Feb 19 16:47:50 2022

@author: Big Smoke
"""
import json as j
import pandas as pd

emptyArray = []

season1 = open('src\Components\Python\THEJSONFILES\seasonone.json', 'r')
season2 = open('src\Components\Python\THEJSONFILES\seasontwo.json', 'r')
season3 = open('src\Components\Python\THEJSONFILES\seasonthree.json', 'r')
season4 = open('src\Components\Python\THEJSONFILES\seasonfour.json', 'r')
season5 = open('src\Components\Python\THEJSONFILES\seasonfive.json', 'r')
season6 = open('src\Components\Python\THEJSONFILES\seasonsix.json', 'r')
season7 = open('src\Components\Python\THEJSONFILES\seasonseven.json', 'r')

columnData = ["episodeTitle", "seasonIndex", "episodeIndex", "plot", "imageURL", 'primaryKey']


finalDf = pd.DataFrame

def ReadTheDarnJsonFile(jsonTitle):

    df = pd.DataFrame(columns = columnData)     

    seasonData = jsonTitle.read()
    seasonObj = j.loads(seasonData)
    
    currentSeasonList = (seasonObj['episodes'])
    
    for i in range(len(currentSeasonList)):
        tempTitle = str(currentSeasonList[i].get('title'))
        tempSN = str(currentSeasonList[i].get('seasonNumber'))
        tempEN = str(currentSeasonList[i].get('episodeNumber'))
        tempPlot = str(currentSeasonList[i].get('plot'))
        tempImage = str(currentSeasonList[i].get('image'))
      
        dataObj = pd.Series([tempTitle, tempSN, tempEN, tempPlot, tempImage])
        df.loc[i] = dataObj
     
    emptyArray.append(df)
        
ReadTheDarnJsonFile(season1)
ReadTheDarnJsonFile(season2)
ReadTheDarnJsonFile(season3)
ReadTheDarnJsonFile(season4)
ReadTheDarnJsonFile(season5)
ReadTheDarnJsonFile(season6)
ReadTheDarnJsonFile(season7)

finalDf = pd.concat(emptyArray)

holyOutput = finalDf.sort_values(by=['episodeTitle'])
holyOutput.reset_index(inplace=True)

with open('fixeddata.json', 'w') as f:
    f.write(holyOutput.to_json(orient='records'))

print(holyOutput)