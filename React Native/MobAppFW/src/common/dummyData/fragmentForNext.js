export default {"name":"wardBuildingFrgmt","id":"28a2dd12-b08e-11eb-87c5-9929ff54e00c","label":"Field Level Survey Application","titles":[{"id":"20228760-b08d-11eb-87c5-9929ff54e00c","title":"Select your ward","sort":1,"show":true,"showLabel":false,"questions":[{"id":"3370d9a8-b023-11eb-87c5-9929ff54e00c","question":"Select the ward","showLabel":true,"shortLabel":"Ward","show":true,"type":"DROPDOWN","sort":1,"key":"ENROLLMENT_CUSTOMER_WARD","isConnectedQuestion":false,"linkToFragment":false,"dynamicData":false,"validations":[{"id":329,"type":"IS_MANDATORY","errorMsg":"Ward is mandatory"}],"options":[{"pk":1,"id":1,"name":"1-Kazhakootam"},{"pk":1,"id":2,"name":"2-Chandavila"},{"pk":1,"id":4,"name":"4-Sreekaryam"},{"pk":1,"id":3,"name":"3-Kattayikkonam"}]},{"id":"5a8959b4-b089-11eb-87c5-9929ff54e00c","question":"Select your building","showLabel":true,"shortLabel":"Building","show":true,"type":"OPTION_WITH_ICON","sort":2,"key":"ENROLLMENT_CUSTOMER_PROPERTY_TYPE","isConnectedQuestion":false,"linkToFragment":true,"dynamicData":false,"validations":[{"id":395,"type":"IS_MANDATORY","errorMsg":"Select a building"}],"options":[{"id":"5a8959b5-b089-11eb-87c5-9929ff54e00c","key":1,"name":"House","inactiveIcon":"iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHoSURBVHgB7ZrPkYIwFId/++cuxz1SgiVoJdKBdgBW4GwF2IElwFYAHcQO9Lqn7Huy7O4gIESCJJtv5jnjiJiPJO9lYoBfPIqQIqGQhkZGEaAGn0JMrLH3hPh2+kFMvMGqkt4Lii4NYB885T5ZMKZ4g6U8oehOa3mG5ThB03GCpuMEh8TzPMRxjM1mg7F4xUiwXJIkmM/nl/ez2Qzb7bb2Oo4qx+MRqmhfF/q+L4UQskoYhlfX7vd7Wccdv/8YuRIasuYK0nCUp9NJ3iLLMknDUougtiSzWq0uc65uPlXheUmSoN6GDgbvufV6LVXgoUwPZdAeHFyQE4cOJiG42+2kLh4qyAmCs+EtDoeDpCIvoyhqzayTEmQ5zoJtcCZdLBZX32XRSQveqnEl3GtN92hKKg8X7CrHcD1sug/Ld6G6IOgaSnsyXLe61jimbR3ZtPasI89zLJdLnM9n9KHXE6EC3ml1ogseNTx6erS5u5xqAR+anpLd5HQVcFVYsm1uK/VgNYIgkGOh2ka3ZWE6o2xZpGna+BmXiHIbQxfa56Due8DNQYtxgqbjBE3HCZqOEzQdd4zEdJyg6ThB0/kXginsJWfBD9jLO7/wHwMCd+zNTDTEX1Mflh9KLwlQHM03RaQaCUWEYlRe+AJQUYeLcbvX8QAAAABJRU5ErkJggg==","activeIcon":"iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJoSURBVHgB7Zq9LwRBFMDfIFERhe4kTnQahORKBBUhoVP56E9CQich/AGu0nESpzr/gIijU7lrbCOxChWFj4pIznu7t4n7nh07y4z5Je9ud25vc7/defNmL8OgQD6fb8O3ZYzhQqhIFmOXMXbgNTB6Qbkovp1jREEPbIwRFLU9wTvQR87DxuhvRLl53JgH/aCUe2coeI0bfaAnGRLMg8Y0gOYYQdUxgqpjBIPk+f0Nlk7XIZE9gLBogpAgudH0HOSeLACL9l9hIxaveNzLx0tZe2dLB4gQSqG3Xx8cufu3h6J2EiyVpDuctNJl5/iM34II0rtoNTli6yoBi6drIBOpgtQdB48nK8p5HFonMJCacrqmDKQJUjejO8fzw3NPN3UvhChSBplEdh9WLnd8fcfryqKDSTUCF6S8ohCBJCmCJFDBlcvtUGscD4EIUp6tolyl4f07093jMBSJOTUweZOWknOl/LgOFhXwKrQ1t0B6Yg+GOmJF7X6686/UQcqXgdRkTTliI7ZcJue2x507KhNhwVoFvJRaEtPdY8CD6IRAqIvSHeOtcUStoZ/mnbzn6W3vgbPZI6fL8+JbkAYSGlBkzTzqEW2NoGQKL1qE63hfgiIFXAZ+JLlzkEa7vyBHePmfe7TqHvujMpHEifKS5KcBjz/7uPTbaC8Yyl8WlYq8B03beHJJlFAEz2aOqn4mO49NDqqOEVQdI6g6RlB1jKDqmGUkqmMEVccIqs6/EMyAvmRJ8AL0ZZcVFqPTotgo6IXNGOtqwJdn3BkBd42zLtjgOrmDjLM6HW1xcwHcpfmqksHYxOgnJ2r4AnnyFcL6qiYMAAAAAElFTkSuQmCC","sort":1,"hasConnectedQuestion":false,"dataSourceId":1,"dataSourceName":"buildingType"},{"id":"5a8959b7-b089-11eb-87c5-9929ff54e00c","key":2,"name":"Shop","inactiveIcon":"iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGkSURBVHgB7ZpBSsNAFIb/SXWhIE5diCiUdNWiEeuiglQw3qQ36FX0BHoNV+oJzELFXXMCjehGpMSZ0CzspvNwMXnD+xalGV5pP+b1TzIZhTk6ho7WMSkVUnOYgidZWeKqeMFNPaDsi+4jVi3cmbcxwiAvZ7goXpFXgu0DTBGOXE1eruK4pfcxVgpjhIeOZvhurW3j2hzsIERMfyrTniUCJkLgiCB3RJA7wQuugMjbk9+zylaiSPXSotwJXlAu1bhDStHOXozsdgqfdE/b+PgsnOtJM5j0BvDN6CSllNMED/v+BTu7MaWcJjgansM3Z8OUUs5vBpPeEaneWdAGzOaGhm+ov8NZsAkBU0MJGmfBJrRnDSVonAWbEDA1lKBhOYOUoHEWbELA1NigcUVul7gj94OLLK7JUNdIqJ//7/dJi3JHBLkjgtyRVbVl+H5WsQxpUe7ItSh3pEW5I4LcEUHuROYccY9wySIoPCBQ7P5tpQfQ6gePCHBL8/szulGRobAbuO0AwiGfO+HPGpzdv21GJmawOQ8iCFR5Yv9yX7gsclQ7FX4B1AVWkWm760cAAAAASUVORK5CYII=","activeIcon":"iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGISURBVHgB7ZpBTsJAFIb/QRJXJhwBEw4gJ1Bugit3egaPgCfgJrZLV9SNbkwcEljJguCKxKS+sZ0NG+bFkOl7eV/y2qEZYD76eGmn49BS1/WAdg8UN21IpKKYOefm8YALG5Ib0u6ZYggdeIoJifoo+Ak9chFPMT4juSk1ptBH+MvtHQkuqHEFnRRBsIZielCOCUrHBKWjXrAPJv2nEXLyc//B6m8pKh31gnapJh1WFfW7NUbza+Rkc7fA4PwiuT/rDL5u3pCbcv3C6s8T/HpHbpa7Fas/S7Bc8X69U8Adg7gUrZhjSBYMBWa7/0ZulsxxJAt24exFOIUmXbADBSbCKTTJgl0oMBHOWESmKKfQJAt2ocBEQqFJxW6XpGP3g4cczslw50i47//v91mKSscEpWOC0rFZtaMfkPlZxTEsRaVj16LSsRSVjglKxwSlEwQL6KUKgiX0MnPtYvSwKHYIXXjn3GWPNlt6MUGzxlkLHo1TU2T+VqeTLTVv0SzNl0pB8UgxDk7hwC8jl4ahFuVLvAAAAABJRU5ErkJggg==","sort":2,"hasConnectedQuestion":false,"dataSourceId":2,"dataSourceName":"buildingType"},{"id":"5a8959b9-b089-11eb-87c5-9929ff54e00c","key":3,"name":"Flat","inactiveIcon":"iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALISURBVHgB7Zo/aBRBFMa/udNCQV0tRCKee13wD5xFbBLwoqCgYGJpIeZaI6a0UDBFGjsDKnYXsbCNFimEkBNio4ULFzVWWQJa6oo2ImGdt2TmJkfuvL3ZRWaYH+yxs2+Yu+/uvflmjmHYxPPhFXZjKmao8mYVZhLEMWajj5gTDxi9eIPwWRFL/NaHHYTxBkajVYSJwP3HsQZ7xAnCeCdOFb1jmGAME7APr7CB38VdB1HnjUOwEZ6fjKdnDIspwHKcQNNxAk3HeoE7kCHBqzWUBnzosP4lROVCGVnhUtR0Mk1RlebnAAuLL2T76th1lA77yf361xDP55/K2MWzYzg5WEEe5CZw5VOA+4+nZXt46ExLIK8zNUZ1m5dAV4Omk3o3QVbQCdUifvyMkkuwb4+XXAKqw+1iWdtE6hrs1efaBfU7ji7OJrpBVtDks6Xg0rnxVqrxFFx+2+gpNnK6mtsvqiWQfE6d7umDChFvuICbd2syRhYxMlRN7qnO1NijmTmUxn3kgbMJ00ltE99WWt0p1dTpXqTgdjFaqYj0JftorgY9xdq5XBtFGrQE/g8OnGCp+jub6AalIKWioN80pBlWtYnld42OsbRoCaQtj2oTtIwTIhYW5zGpWMHL+pKsURKn1pJqE/SFqbHbN6b5dQ/94mzCdLRSlHbiRwaOyra6uB7m6fhwpi7bah1RPaox2gzLMfZ6W2K6G2FnE6ajlaLtm9pu03mnDa5u33+h9Qs+eTaLyvmyvNQP1s7knZrsd+3WlY79kh29Mia9hw7OJkxHqwZpeqeVhkCnVuQY3CbUMVUL6QctgbT0UrdIWUBfks7SrB1Xg6bjjpGYjhNoOk6g6dgvkHtEA/YSFMDwGpZC57eZV4HH/uA9LDzS/P0DyoUoQEQHuOkB7CHc1IQt/+DQ+W3+ZIo/zOdMR84k8wmV3C88iEIk/6X8BRcpAujpPCn0AAAAAElFTkSuQmCC","activeIcon":"iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK9SURBVHgB7Zq/b1JRFMfPq41M/BjqBAkoDsLSdmLTNpbVJjKaKNUdN91M7KZb+wdUOzgy6EoawY3JspTF6iOBqR14dMKY4Dnv8S6XyqM87iN6r/eTXLiX8/LCN5xzv++Ea8CQwWAQw7fnODaGQ0aOcewZhvHe/cCgFxSXwrfPOFKgBiaOTRRqugJ/gDriXEwc69dQXBEnRVAPKrm+gQK/4mQN1KRKAgegMEugOFqg7GiBsqO8wGUIkPS7DWhdtEGEZCQOp8UaBIVOUdkJNEV5VleysJ3eYuvDkzKmb8eepzANH2cKLPbxtAKN8yYsgsUJvHEHXuVKbF1r15nAZCQxFmv1OgsTqGtQdnx3E2QFXvAWEQuFIXo9ytbWTwu6/Qu2ToYTE2NB24TvGpzV5+gL84LmvY8o2iamsbqSwd0yw9afvlfYr0ZWcDeemynG77BBIyRwO50f2+6pPl0RJOAg/5bF7pcfQa1Tt+dkE3zsWeUlHDbLsAi0TciOb5tY3r/N5lRL/HbvpuCkWOP8hKVvLBSx63eW2GWOCh/AD0IC/wa/St98Xa9tYhrJcBxSUS4Nz/hUC6OFZGeKmVZ7zCbuJXKeMb8ICXySLXjaxINbeU+bIHFHD0e1xNsEParxsd36vj3mRduE7AilKHXiZm/00ExdgcsXTMenlRdszV/XOGuOxehRjd0DU5yP0bUiaJuQHaEUtZva0KipbfW8ezx6wHax+tbUXtHPtVchJLC0tvOHTXg1sgdbb5i/kV2QbUzC6eirbK1t4gp0DU6DtvddGKUPbxPzQjbBpyRvIfMgJhBriW+RgqDb7wnV3GV0DcqOPkYiO1qg7GiBsvNfCKyCuhyTwOD+bfz32DOGh9HpUGwK1MI0DOPmEr50cbEJzhlnVTDB0eRsMvbpdFSL0x1wjubLShXHaxzrpIk++A3+oT1Ed1M7JQAAAABJRU5ErkJggg==","sort":3,"hasConnectedQuestion":false,"dataSourceId":3,"dataSourceName":"buildingType"},{"id":"5a8959bb-b089-11eb-87c5-9929ff54e00c","key":4,"name":"Office","inactiveIcon":"iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL8SURBVHgB7ZpPaBNBFMa/TfSgIK4XkRZreqv/IB7qpQVTBQ8KNtcWpOlNVMixFw8V9NCTjUjpLS0VcjTx0IMgSaG5WMGFVK2nrhV71IheRMo6b80OsyFZs5naOsv8IGFmX0jyLe+9b2YZAw3MBMzYYWQdAyk2TUFNLMdBrv4OC94Fg97MASSMOMpsmEA0sJ0djNQ3YLsCj53FJqIjzsN2DuJC3DyDjGEgg+hhxnbwM37oOPJscgJRhOWnwdLTQYSJIeJogaqjBapO5AUeQEi+rMu7yupaBTcmR7AX6BRVndApKkKpVl1b4fNbN7M4esR0x7UPFpZflnhsbHQCfb0J7DVSAknczNw0n4+lJ7jA9feWLzY0eGlfBOoaVJ3QuwnRJr59r7svj76eRNsYpa6XvsTWtg1Z5pdy7DUb+BmpGmz+053GCPFmyPz+39A2EQRZQY11S4/rV9L8rlIKrr6qdBQLw3g6E+bjcgLJ50QrGL6Y4iKqTMDde5M8RhYxPJhyx1ufbV8sDGEFaptQHakUpeUXrVA8xM44xNLxeb7M5+cHkr6xGJt/mmPpXnTHlOJLj5/xWKG0iEJxAd0iJZDqqt3yKyhGIrx6JEhEu5i41u0GnaJBULunjuhBqed1UVrF1DasjmLidxC0SxF/QwYpgYXios8mrBebXATV1B3BCqjmvNQjce129CRoN3f72iZURypFr10excmeU3wuLn7JJp48yPO5aCFUj2KMumi1UXf0HQ+nHvHYcrnELaQbpATSHxX9TYQsYrw30zJGIsQlV/X1ChPYOvZp+6OUQJ2iQYTZ8AbFxDEhWkNzLCxSAmlH3WwTnhAZm0he7cduoW1CdaRSlHYSU7en+Vy0iXOnk76YWIPUYcXYv0Tqqdp+MzN339cDWqFrUHX0MRLV0QJVRwtUnegLZB5RQXSxYjAg92T1P4bObxtmEqbxC28QwSPNX9+iP1a3UKcD3HQB0cFuaPpz6t6Dzm+zK1l2MQkFcfsJldwPzNZtuM86fgMK7SbZCArAhgAAAABJRU5ErkJggg==","activeIcon":"iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALrSURBVHgB7Zq/b5JBGMeftzZ24sfQTpDwKg7CQplwEhpllaSMJoJuLjRxcDSxcXIrf4C1TRxponEjRujGJCzgUn2bwEQHChMu+DwvvMfRAPJytc29vU/ywB3PG+ALz933Dk6DEYPBwIt3OxiJUchIFWNP07SP1gMa3aA4He++Y+jgDAyMLRRqWAJ/g3PEWRgY0VsoLouNLDgPGnJ9DQX+wMYmOJMSCRyAg1kBh6MEyo4SKDuOF7gKNlnN3wNR4v4YfNv+BFeBKlHZsV2iPHFfzCw3i3x1Hzr9ntmOrIchFXzMcgf1Apz2WnDViAlEcW9iOdY/qB+NBW7cn8iVm5VrEajGoOzY3k3wNuFdc4Hntof1T3vNmbnzP+esfImAyw+i7EQzkNt8PvcaoTFIb5h/04vmCP7DEHn9f6FsYh6R9RDOliHW//KryD5V3e2Dh77YQjk7HDaObF0vJDAVTE5YQXA/wUSQgA/J9yz3qPAUyq2K2Q64/RM5O9gVqGxCdoRK9LBRMFcoFvzMeIzlSGVpUTurj9vtxkQuF81C6m7SbHf6XUh/fclyz8LbkAmlYVmEBBrdlhl2cyTCGo9EJpyemePXusugSnQeAZcPdM94RVJr19ksSiuZyEZ4oRw9Dw//rdGMK4KQQCqtWTbxBMfULJsgcbN29DoKuszdvrIJ2REq0c8nRZwpx9ZAOwYLsokXxdesz19HNsHnMmgFcd8Ds02z6KvjdyxHqyXLQpZBSGDtrGHGNIY2MX1ZRSL4JVfCj+J803M0JkUEqhKdh7mpXeM2vN3mUjnPmnvieXlr8F7I2UVIIO2mL9qEtVwTsYmTbAkuC2UTsiNUorST2IU86/M2UWv/hN3KOMfbBI1HPvc/EfpV7bqh8c/PAdNQY1B21DES2VECZUcJlJ0bIbAEzqVKAsvgXPa00WF0OhSrg7MwNE27s4I3HexswfCMs1MwYKhpOMmYp9NRLTbpD+8qyEsJ4y1GlDTRA38B1i08W4N7AuYAAAAASUVORK5CYII=","sort":4,"hasConnectedQuestion":false,"dataSourceId":4,"dataSourceName":"buildingType"},{"id":"5a8959bd-b089-11eb-87c5-9929ff54e00c","key":5,"name":"Auditorium","inactiveIcon":"iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIFSURBVHgB7Zq/LwRBFMe/s0dBtRoRElmd0FDoFOc/0FKdUhQ6lQSJRkcilFS0NBIScQoNhU38rm4RSlZoRC5r3rlL3HDO7O3uZSbzSe5y+zK3ySd5O+/N5jEUsR3YVjMmA4Y0v0xDTdwgwJJ/ifVSgNGX3Q2HpXDAfzrQAy/IY8i/hlcQbOlFDvrIlfCCRvSn7B5kGEMG+mFbebynmlqxxi/aoCM8PxlPzwAaY0FzjKDqGEHVMYJR0NnhYHl+De5uDiPDGSRJrHWQxKbGZzAqSN09eFhYncPm1jriJhbBSmIiSYhGKvhfMZE4RSMRDCsmEodoTYJRiYlEKRpKMC4xkShEpQVpux9NeKsn0YnpMRydZCGLdB1MWo6gjBkcSCMM2ncyDZBkI4Hi/BtnNy7CYE70qiOdot8RH/yXVx9n127VdXePXmFnDLtOhppS9Om8/K9Ur2g7r7ZuYWWOf2bLYp3tDty9XFmM7lVrsTfnQdUxgqpjBFXHCKqOadX+Quxa7iu0VeK686uf7Ry1eeK6o+MsasWcJlRHOkXpnUw92DnYxs7+FmSRFqzHOxni/vE2lKApE6qjvaApE6pjBFXHCKqO/oK8RmShL64FhkNoCs1vM7sPNvvAKTQcaX6+QJflu/BpgJsC0Aev6PQ1dV+C5rd5ZJIH+6Aghf2EHrk3LPoefIp9Ar3uyiGIfNsRAAAAAElFTkSuQmCC","activeIcon":"iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHpSURBVHgB7ZqxTwIxFId/VaKThEEnSDyVhQlYZAQSmUl0V9RdNzdNjBsb7hh013/AQRiZZHP0BtkNmxO+J5BAFbHHHaS1X/Luek1zyZe0177LE+jT7XYjdDulyPVDR1oUFSFEbdAh+EJyDt2eKByYgUuRJ1F3IPgKc+QGuBTpRZIrUaME8+Al9yFI8JkaKZhJnQW7MJgFGI4V1B0rqDtW0A/cThvHj2eI17K4fbnHLAl0H2Sxq2aFpB5G+p1wFOeZExwk9hA0gQiOE5OZhaivgn8VkwlS1BdBr2IyQYhOJeiXmIyfop4EgxKT8UNUWZA/90GLybBodaeMbCwDVZT3wVnLMTxjGu0mvGD8SSYERfYTu5gHydUEvGAzet1RnqLDyAs/shRGci0xcZwTjmF9Jep5nApTTdHQdXzkmdfnTaE8cdwF7W0cw7idN8o2ciN9/K5p17zNB3XHCuqOFdQdK6g79qj2G1Xp1OKMOVbJ41I/HOciy+Fv47KxbUyLzSZ0R3mKHtE/mXlQ3CqguFmAKsqCd3P4J8Nw6uRF0G4TumO8oN0mdMcK6o4V1J1/IViHubRYsAFzqYh+MToXxTowC1cIsbFAl3d6yKNX42wKLnpOvY/MV3U62VLzEL3SfF2pU1xSpNmJOz4B727HSXYQHaEAAAAASUVORK5CYII=","sort":5,"hasConnectedQuestion":false,"dataSourceId":5,"dataSourceName":"buildingType"},{"id":"a41d5994-b0d5-11eb-87c5-9929ff54e00c","key":6,"name":"Market","inactiveIcon":"iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANwSURBVHgB7Zo9TBRBGIbfPbTQBG5pjMGIRwXRI0IiNmfCj4kFjVfYkPiDhQnR4iiMWJgIiTGBCgqRDgyJtGCisUEgkUYKz9ypZyxcuWDrndoYQ875lttlduS4mQU5drNPQXZ2dmfnne9nZo7RUESPQA8dRqKgoYMVO+BNkoUCxnIfMGXd0OiP3oSIVoUFdhmBPzAK6+jMZWCYAmtP4Qv8I87CKBxEa5V+Er2ahl74Dz20jt9Vh45gkhWOwo8w/9SYexbgY0LwOYFArxMI9Dq+F3gAO6DvcgJ9V/tRXxfBXvB0dgojj4ewumZIv+N6HiRxD++OYq8hce2XWpH/mZN63rWL9l3pRyWoPxZBT7xX+nlXLtrc1GJ+yOL5q1mkM+/M63C1zsQn7LrXK4tYXlmyywM370vVpT4l8WJ+zi5Tm9Q2ca6tAxPTct7jSmCUCeQZGR9CKpO0P84LnJl7ghkWOxa8CBI3PD5ol3vi1+x4zq59ddTF2trNtq1rWVy5aOzM5gcoFixxRE1xlC1UEkLq42Y70cbTjjremmTJZmGQS+FKoDWSZqc4cYSYUX9IJoONZ/P2dbjGOVDksjwxrg/boSyQYo+PPz6GrHpHx4QB2I7Vb4Z9TVaqrzthl9OsHT5zNgsWLoWywGij0zUoUfAc5zqVV7AewQskwjW1jrb4weo+H4cMygK7uy46ymnBQrxrqViPyArxKiYzK1Ob3xEsXAplgXxwU1yIVuLr+ZiSQUxIYSFh0XTEEzvbiXLsSODym6V/6vlOqVpQdFExYaXLJLStUBbIWyxcHXbUialbtICYgEQXE+ujTc5EImZWGZQFioFuxQmJucNN4oQ5cXOdHhDq+fcJWt/y0HTU3RUv+b44dWyF8mKb1oGPHkw67lEmJeuJFvuf9eTOLRcaUA5Xu4lnkwuOyb4S3Lp33bEELIWrlQytPSsJWVRGHBH8ZOF1AoFeJxDodQKBXicQ6HUCgV7HlUDVnfpuk1X4rdWVQNrVT0yPoRLQt4cVdjN0jGQQLphffgk6p0E79lIb1d2Gtkk3bvfgs5GRfic4RuJ1AoFeJxDodfwvkM0Ri/AvyRCbq5fgU+j8tqa3QNf+4C18eKT5+3s0hHJJ5OgAN92AfzCKmjZO3VvQ+W12J8Fuyh1h2GeY+YRC7hdGcwbM//P9Bdj2KnVQfPnuAAAAAElFTkSuQmCC","activeIcon":"iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANFSURBVHgB7Zo/bBJRHMd/V42dQIYyQQLqIl2gE0zWRjs3sZMxsRhnaeLgZNpY4+JgArsROri1iY0bGqGTGBOOpSxarwlM7XDCIhO+H3DHe88i7x225J33SR68x7u7d9/7/XnHy9NgQLfbDZCvdVJuDoqK6KRkNU3LWz9o+EHERcnXJ1Ki4A4MUpaIUMMS+APcI87CIGXhAhGXJpU0uA8MuY5GBFZJJQHupIQCu+BiZsDleAJVxxOoOq4XeBEmIKe/gWy1AEftBpwH92N3YDO1DhFfSPgcx/Mginu8/wLOm6g/BF/vvofArE/oeMcumq3mYRoYrSZs13eEj3fkorWTOnHLpt1euboM8WCsVzc7LWLdvN23GErCYjhpt7cqOaG++Nw8rFy7bbfRY8xOu1cvNyqQSaRBBEcC9eMDpr2RzNgCy80KI3BtfrUXOxaMQCIOz7UoHOza8YyuSPehKLy2NYYojlx0vzEcIDDrt8UhaEEamYSQCF636/oJ+xBpa+IYteM6iOBIYIkSSItDjlpsRsUHIEpg9rJd/zlwR3sc4rI0olaUFohBTscfxhHfz9wY9wD+RsQ/tDZaiZ5+8Dp05uTDZBTSAmuc6/ACaQvKWA+J+MNM2/zVZq5FW3Hv8AOIIC1w73uRaceDrOuYlGvJWA+J+tl4xWzNjsXGusgLhrRAnRo0Phf7Y8KlLRy4JGlBLiHxCQunI5py4wuMQ95FqexFz2HDm5rEgqyLGlzC4q/H95+GtEDaYvwT5l2K7+cTEH+DfD8/FZhcZhVBWiAf6NZN4OBbn3PMsdv1XSbjPq+w/fT5CL6t0OBU8O6wOPJ8Pv5PQ/plu0Bu+mHxCfMbZlKMvVFP+Cz6MSF9S5dhHI7+TdzauSf1unQWvF5+CWvUK+AoHL3JbKQyME0wuYmIQ7wlC9XxBKqOJ1B1PIGq4wlUHU+g6jgSiEsV0yTiCwsf60ggrnCJLp3/a3BFYTP1SPh4xy766sbT3tK6zMr1pODfpI+rb6Us6G0jUR1PoOp4AlXnvxBYAveio8Dxy8PqktUGm9FxU2wU3IWhadqVGfJhksYS9Pc4uwUD+pr6Saa3O52oJdUH0N+aryolUp6RsoCa8IffT85OyLuH1FAAAAAASUVORK5CYII=","sort":6,"hasConnectedQuestion":false,"dataSourceId":6,"dataSourceName":"buildingType"},{"id":"5a8959bf-b089-11eb-87c5-9929ff54e00c","key":7,"name":"Hospital","inactiveIcon":"iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAInSURBVHgB7Zo9LDRBGMf/s/e+xftWSwRRyOkuPoJCRXHoTuGURHElmisUSoRGR+GiI1HQOYVT+UqoFFYOOVFYCiVbaERkzXOhkOyKcXu3mcn8krvcztwUv9uZ55m5fRg+MKMwjf9IuwxxfhmHnFiuiyXnCmufDYzezBiiLIID/jEKNbDdN/Q6BdhFwaoW3EIduU9s9y86I2YzUowhBfUwjTe8RP7VYpVf1ENF+PxkfHq6UBgDiqMFZUcLyo7ygn/wCxL9SUyNT6Mt1oFKkL+2sLK+hI3sGkQRzoPDyRSW51cRBqPpIeT2skJjhKfo2GgaYUGzRhThO/h4Ee7Gp7qVCX1fB5lSye1nsbO/7dk30DeIRF8S5aTsgvnCuW/0a2yIll1QJ3rZ0YKyo9PET9jhqeCCR0svjk8PfccV+zLefa2xdp5GSo+wgQjmeJ77zUb4hAue+PwAtOcNQlCvQdnRgrKj08RPSPBTAW2cvTj+JlJ2d8XRw19eUJoIgkAEKZz7hvQMfAVJbmpC/JQugl6DsqMFZUeniVKhcD/CN85+feVG/y8qO8KC+YKFsKCHMKIICy5kZhEW9IRJFCojmREZcHNbwP3DXXHvWVdTmeoTunOTc+PY2t2EKLqMRHa0oOxoQdlRX5DniEOoi2WA4QiKQvXbzOyAyV5xBgVLmp8u0WQ4Fhwq4KYGqIP94YQvhyuq3+Ytad5YmRqtgCnGE1pyz1h0bDjU9g4V4JbdldGm1wAAAABJRU5ErkJggg==","activeIcon":"iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIDSURBVHgB7Zo/T8JAFMDfIR/AASYd8M8CC3aRERmYTCTRXTDO1tGNRL4BXRyFD4AJrgzCJpNlYlGsCU46GDcTk/oefxbTGq70T+68X/La0qNpfqT33h09BjNs217F3TnG3ixExMSoM8Ya8xOMNiiXwt0dRgrkwMIooKg1F3wGeeTmWBjaCspV8KAC8kFd7ouh4AMe7ICcdEnQBomJgeQoQdFRgqIjvWAcPNAedaB2b8DgfQhhkE1kQNfKUE4fAS/cdbA5bMFp5wKioLV/BaWtItc13I+oYTYgKmp9A3jhFhy8hfNYOt7bQ5dQSWZZSptFOHDpN7dPnUnCCpLABbPJNGa/Q8e2l89x4IKq0IuOEhQdVSYWgUoBZUsn8ms51+uorZrTHdtoQOFHhvVHEOvcsUsp+Iv8em4STjSHN74Iqj4oOkpQdFSZWIQ2zgosHDg7QaXALVP2xn3ovfYd2/yad/ojOHKf9lCdcxVEOS+zdB5UHxQdJSg6qkwsC6V7Gji7tQUN9z/bcWMbouRbf+T6vuqDv3Gb2IZBNsF/b27B6q4OUaFrJ8CLp1UWlDQM8zq09xTZZAZ/2DPuN0uEWkYiOkpQdJSg6PwLwS7Ii0mCPZCXOpstRqdFsSmQC4sxthHDzQd+KMB0jbMsWDB1miaZyep0tMVDGs2aIC5djEsMjZzoxA/8baC8OWnXKQAAAABJRU5ErkJggg==","sort":7,"hasConnectedQuestion":false,"dataSourceId":7,"dataSourceName":"buildingType"},{"id":"5a8959c1-b089-11eb-87c5-9929ff54e00c","key":8,"name":"Public place","inactiveIcon":"iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB7doxTsMwFAbg/zkwwGQYEGPYEDCUG5Sb9Aa9CpwAbgKcgAyA2MgJwAMLQpWxq3popCqyq6R6T+8bquapavXrObYbmbBia1hziLknTMPlFDw13uPOveMhFSi+2HPUVOExvK0hQ+sXuHEfaJcBjy7xCTnhktbv47qyF5gRYQZ5rFngtzo4wX24OIVEYXxSGJ4eghkIpwG504DciQ+4h0Jfr+OuLsdXhBI6RLnTgNyJD9i72c6dLTfNdt3vSZ9L9e71tr+X6DqYa1OndkU7mCu3Y0N3WDtYqm82HOte1Q6W6nZk7H8fiXYwV2mnhuqwbra504DcaUDudB3cVt8ec+gdjg5R7jQgdxqQO32yzZ0OUe40IHcakDsT1ognyNUYEJ4hVDy/TXYCS394gcAjzd9vODOugYsHuGMBcrSrTFh7nhDPb4fKPBQnYGg5n8Rb7ge3roWLtX+F5Vng5c7WyQAAAABJRU5ErkJggg==","activeIcon":"iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFESURBVHgB7ZrRbcIwEIbvKAN0hFTqAGWDsgldoJ2hI9AJuglhAhgACY/AKxJS+E3il0goslGC7vR/0iWOhYw+neM40al0NE3zitMP4rMLi+wRa1X9Tx0aD5CrcNogKvFBQCwhGpLgUfzIJQJi8QK5FRor8Ue85c4KwR0aH+KTOgo24piZOIeC1qGgddwLzqWQ+d+7TMnl+yAlcIpah4LWcS84uNnOXS3vrXb9cdLvUn//+tH/S/A5mD3gnUw9C2Ywl9yMjZ1hZrB44IHVcKp7lRkspZ+Rqd8+Esxg9oCFmRorw9xsW4eC1qGgdfgcfJShPebYOxxOUetQ0DoUtA6/bFuHU9Q6FLQOBa0TBWvxyz4KbsUva+2K0WNRbCW+CKr6NsPhhIultDXOXgjSOrWLzK06HbZofklbmm+VGvGLWESn2HEFD8ZYWRjw6vIAAAAASUVORK5CYII=","sort":8,"hasConnectedQuestion":false,"dataSourceId":8,"dataSourceName":"buildingType"},{"id":"5a8959c3-b089-11eb-87c5-9929ff54e00c","key":9,"name":"Divine","inactiveIcon":"iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKWSURBVHgB7Zo9aBRBFMf/s6eFgmZiIaIQNpXBD7gUFoLgBcHCQiwsjZzdEYtLGiMqRAvFVEkascuBRRoFtdMmOVAQItxiVGJ1a4KWukdsRMI6b5Mr8p2dmV2YYX7FcTuws/vnvZn3scOwCvfBvf2oxgwlcVmCmQRxjInoK2rtAUY/vAc+K2Ba/PVhB2G8jL5oHmEisPMkmrBHXJsw3oveAj+BMmMowz64t4y/hX2HMSkujsBGhH8y4Z4xLMaD5TiBpuMEmo71AvdAM5VrVVSuD6LrqJ/mNiz8CDH1qobRJw+gEwr096GJ4YERjAw9RscBjrR0HOQ4d6aE1lILHz99gC60BvrgTRNdx3yo0FqK0H22E7rQugZVxREy1t8OJYH0MuSWwdsmfn3Wl/HRXPUXDVT6q1BF2kVJ3OvJaZzuKSJLaPM5f7U3cV0ZpC34cHgsc3EEuT09SxZpC+p0yd1AG4+MFY0J9JX+QchgjAVlw4d0JrPwM0Se0GYjg6voTUcp2aYgf+nClSSx1p2BEHPfAjx9NoGplzXIIu2i9eeNXOIgQUIvl/vyDRN5iUuedbyIW8JbZDAmTBAywd6oTUYm2BtlQZlgb5QF5+YDpMX6QK/cdFrfXGqncKmbTlvcp5oSKltw/Vo8dIolL0lVfhqKF30h5vum86ngUjVV3s/WMXC3vGGcUrtHt8eSVmGWZC7w3ewMFjdZR4tYEZ+1QPdtwnScwJ3IsnVBZZIqygKpIM0KHXNrEDiOm/duaLUkzXVndEipkm/jmk6m4wSajhNoOvYLFDFiBvYSeGCow1Lo/DbjRXD2Dw1YeKT59xd0e1GAiA5w0wDsIVzVhDUdHTq/LUaqYjC/Dw8aSfYTWnJ/MB6FSHr8/wHe8+NI0d967wAAAABJRU5ErkJggg==","activeIcon":"iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ5SURBVHgB7Zq/axNhGMe/by04NXaoUwOJ2CVd0sMhm20RR5d20sGkU7cL1FUEq4uLcPkDbDropiA4KqadLIiJS10snthsGUI7BYT4PJdkidFw7/vewfv2/cBzd3nD3fHh/fG8790JDOn3+/O0q1KsDcNEWhSBEKI+KhC8Ibk87T5S5GEHIcU6iYYjwR+wR25ESOFdIrkKHVRgH9zleoIEm3SwAjtpsGAfFjMDy3GCpuMETcd6wVloptbaQ9Dcx8/z01jn5TOLuF/YxKOSD51ozYO7R7UoVHh+8yH8lQp0oVXw+t4q1VwbKsxfzqCz/QW60NoHVeWYbu8MOlGqwW7vPOpz+8dvYve5aRQXllFe3lBurtKCLHfr9T187XxDkvDg8/nuO2q6c5BBuok+OHySuBwTnrWxQ/eSRboGZ2tLSJPOdlOqFo1J9NzXZTBIsA4ZpGcyuUwWacKDjQxuRW86SpNtnne+PXlPSf5XlBd1w8ne98oo0yRcFukmeuPVnVTyIMOiHzZfppsm0pIb3OuYWksAGYxKEzLdwKhBRibZGyZYR1yMEixeLSAu1id65YdO4wvd3Fx2Yvk0/nXeqFwW5RocXzb99r/TGu4US/U1xOFkqxHJTLqeCm6qpsrqYgkvbj/7q5xz2s7hUxy0j5AkyQtmSxOXVrnhf0kLuncTpuMEp6Gap/5HcSH+zGUcZcGqV0FS+N4WVFEeRfnR+hV6YbL7KdDyboLhUbdK1y0XNqCKe+hkOk7QdJyg6VwIwQbspcWCB7CXQAw/RuePYvOwi1AIcW2GNl36sY7BN862EGLgNBhkoq/TyZYOeXbbgrk0KB5TeOzEBX8A3IflMjN/6kAAAAAASUVORK5CYII=","sort":9,"hasConnectedQuestion":false,"dataSourceId":9,"dataSourceName":"buildingType"}]}]}]}