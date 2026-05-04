# Liste der Controls der Klasse "BSI Stand der Technik Kernel"

Quellkatalog: [[../../Quellkataloge/Kernel/BSI Stand der Technik Kernel|BSI Stand der Technik Kernel]]

```dataview
TABLE WITHOUT ID
	file.link AS "Control", 
	stmt_practice AS "Praktik"
FROM "BSI/Grundschutz/Anwenderkatalog"
WHERE 
	oscal_class = "BSI-Stand-der-Technik-Kernel"
SORT file.name ASC
```