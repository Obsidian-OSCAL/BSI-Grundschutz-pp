---
tags: Security_by_Design
class: BSI-Stand-der-Technik-Kernel
type: control
control: DEV.2.6 Widerstandsfähigkeit gegen gängige Angriffsmuster
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DEV.2.6 - Widerstandsfähigkeit gegen gängige Angriffsmuster
Tags: "[Security by Design](tags_Security by Design)"
Gruppe: [DEV.2 Softwareentwicklung - Security by Design](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DEV.2%20Softwareentwicklung%20-%20Security%20by%20Design.md)
---

> [!info]- Untergeordnete Controls
> [DEV.2.6.1 Eingabevalidierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/DEV.2.6.1%20Eingabevalidierung.md)> [DEV.2.6.2 Ausgabekodierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/DEV.2.6.2%20Ausgabekodierung.md)### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Entwicklung (DEV)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DEV%20Entwicklung.md)**<br> ***  &rarr; [Softwareentwicklung - Security by Design](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DEV.2%20Softwareentwicklung%20-%20Security%20by%20Design.md) *** | Anwendungen | SOLLTE | Schutzfunktionen gegen gängige Angriffsmuster |  | installieren | Freigabeplan | >Entwicklung für Anwendungen SOLLTE Schutzfunktionen gegen gängige Angriffsmuster installieren.

> [!info]- Guidance
>Gängige Angriffsmuster sind wiederkehrende Vorgehensweisen von Angreifenden, die in der Praxis häufig auftreten, z. B. SQL-Injection, Cross-Site-Scripting (XSS) oder Pufferüberläufe. Welche Angriffsmuster für die konkrete Anwendung gängig sind, hängt von Funktionalität und Architektur der Anwendung ab, z.B. Prompt Injection bei generativer KI. Die Vorschrift zielt darauf ab, dass Produkte bereits in der Entstehung so gestaltet werden, dass typische Schwachstellen systematisch erschwert werden. Ohne entsprechende Vorkehrungen könnte ein Angreifer etwa durch manipulierte Eingaben vertrauliche Daten auslesen oder unautorisiert Funktionen steuern. Werden Schutzfunktionen frühzeitig eingebaut, kann die Stabilität des Produkts erhöht, die Angriffsfläche reduziert und das Vertrauen der Nutzenden gestärkt werden. Zur Umsetzung können etablierte Programmierpraktiken wie das Verwenden sicherer Standardbibliotheken, das Einschränken von Nutzerrechten im Code oder das Einführen von Fallback-Mechanismen bei fehlerhaften Eingaben verwendet werden. Ergänzend kann die Institution Secure Coding Guidelines nutzen, die häufige Angriffsmuster adressieren und Entwickelnden praxisnahe Hilfen bieten.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 65ec8cf9-f2aa-4eb5-85a6-914c3da3e148 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 65ec8cf9-f2aa-4eb5-85a6-914c3da3e148 |
