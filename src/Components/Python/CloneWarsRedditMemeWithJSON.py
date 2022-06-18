"""
Created on Sat Feb 19 16:47:50 2022

@author: Big Smoke
"""
import json as j
import pandas as pd

emptyArray = []

season1 = open('THEJSONFILES/seasonone.json', 'r')
season2 = open('THEJSONFILES/seasontwo.json', 'r')
season3 = open('THEJSONFILES/seasonthree.json', 'r')
season4 = open('THEJSONFILES/seasonfour.json', 'r')
season5 = open('THEJSONFILES/seasonfive.json', 'r')
season6 = open('THEJSONFILES/seasonsix.json', 'r')
season7 = open('THEJSONFILES/seasonseven.json', 'r')

columnData = ["episodeTitle", "seasonIndex", "episodeIndex", "plot", "imageURL"]
    
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
      
        dataObj = pd.Series([tempTitle, tempSN, tempEN, tempPlot, tempImage], index=(df.columns))
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
print(emptyArray)


holyOutput = finalDf.sort_values(by=['episodeTitle'])
holyOutput.reset_index(inplace=True)
holyOutput.to_json("/home/luke/Projects/clonewars_migration/clonewarssite/src/Components/JSON/OutputJsonV2.json")