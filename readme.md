# A Glance of HDB Resale Market Price for 2022
The aim of this project is to allow users to easily visualize past HDB transactions without having trouble to look up the excel sheet. It is dedicated to researchers, real estate stakeholders as well as even ordinary users. Noticed that potential house buyers might have difficulties to look through the plain excel sheets of past transactions and in order to make their lives easier, this project have been created and implemented. 
Live link to the project: 
https://project-1-a-glance-of-hdb-resale-market-price-for-2022.kaungmyathtut.repl.co/

## UI/UX

- As of now, there is no available data dashboard for HDB resale prices in Singapore. And if anyone wants to find out the past transactions, all the available data are in just plane table format. Therefore, I have got the idea for this project to let various stakeholders easily visualize the data. 
- This project was implemented with target users from various backgrounds such as potential house buyers, researchers as well as other real estate stakeholders to understand the market prices.
- There are two main pages in this project. At the home page, there are 3 main sections where users can find the data related to past HDB transactions. The next page - Detail information - shows more breakdown detail data.
- This data dashboard is implemented with multiple options whereby users could customize the data and make comparisons to suit their desired customization.
- In order to ensure that the data dashboard is not another boring site, various types of eye-catching colors have been utilized accordingly. 

## Features
There are 2 main features and 2 minor features in the home page. 

 ***1st main feature (2 Customizable Comparison chart)***
There are two main charts with customizable data in the home page whereby users can select the Towns, Room type and Floor Type that they want to compare. Once the options are selected, two charts will render the Total Sales of HDB for the selected data. This feature is more useful for researchers and real estate stakeholders whereby they could identify the trends.***

***2nd Main feature (Town Buttons)***
These features would be more beneficial to potential house buyers and real estate stakeholders. In this feature, users can select the towns and it will render all past transactions of 3 Room flats with road names in the past 12 months of the year 2022. 

***Minor features***
There are other minor features such as charts showing the number of flats transacted with different towns as well as graph showing the highest transacted price by flat type.

## User Stories


- Role = Market Researcher
Let say if a market researcher wants to look out for the trend or transaction volume. He/She could make use one of the main features at the home page whereby user can select the town that he/she wishes to research. There are options such as Town selection, room type selection as well as floor type selection which are customizable as user desire. Upon completed selection, user would be able to see the total volume of the HDB transactions as well as he/she could selected other towns with different or the same options to make a comparison. 


## Technologies Used
The code was mainly written in HTML5 and JavaScript languages. Data from data.gov.sg was utilized as data source. Original CSV files from data source is converted into json file. Then data from json files are loaded into the javascript. After that various steps of data transforming, filtering and cleansing have been implemented with javascript. Finally, data is grouped and pushed into designated series to render the charts using Apexcharts as library.
Bootstrap framework has been applied to design the website as well as with the help of CSS.
Ionic framework has been utilized to load up the social media logos.

## Testing
### Test Case 1
#### Test that user can render comparison charts
1. Select the Town named "Bukit Panjang" in drop-down option of 1st chart on the left at the home page.
2. Select " 2 Room" & "3 Room" from Room Type checkboxes.
3. Select "Middle Floor" from Floor Type Radio Buttons.
4. Once above 3 options are selected, the chart will be render automatically to show the total sale volumes of 2 Room and 3 Room Flat at lower Floor in Bukit Panjang with different months in year 2022.
5. Now, in the 2nd chart option, Select the Town named "Punggol" in drop-down option.
6. Repeat Steps 2 & 3.
7. Once the options are selected, the 2nd chart will render to show the total sale volumes of 2 Room and 3 Room Flat at the lower Floor in Yishun.
8. Then user could figure out the trend by looking at these two comparison charts. Users would be able to response interactively and synchronously with data from the two charts.

### Test Case 2
#### Test that user can render the individual transactions price in different towns
1. Click the Blue Buttons with different town name in the middle of home page.
2. Individual transacted prices of the selected town will render in 12 charts with representations of 12 months.
3. If user want to view another town's transactions, he/she must click back the initially clicked Button to close back the collapse before clicking next button.