---
tags: Security_by_Design
class: BSI-Stand-der-Technik-Kernel
type: control
control: DEV.2.2 Dokumentation der (Software-)Architektur
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DEV.2.2 - Dokumentation der (Software-)Architektur
Tags: "[Security by Design](tags_Security by Design)"
Gruppe: [DEV.2 Softwareentwicklung - Security by Design](BSI/Grundschutz/Quellkataloge/Kernel/groups/DEV.2%20Softwareentwicklung%20-%20Security%20by%20Design.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Entwicklung (DEV)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DEV%20Entwicklung.md)**<br> ***  &rarr; [Softwareentwicklung - Security by Design](BSI/Grundschutz/Quellkataloge/Kernel/groups/DEV.2%20Softwareentwicklung%20-%20Security%20by%20Design.md) *** | Anwendungen | SOLLTE | die Architektur |  | dokumentieren | Entwicklungsdokumentation | >Entwicklung für Anwendungen SOLLTE die Architektur dokumentieren.

> [!info]- Guidance
>Die Architektur bezeichnet im konkreten Kontext die strukturierte Beschreibung der grundlegenden Komponenten einer Software sowie deren Schnittstellen, Abhängigkeiten und das Datenmodell. Sie stellt dar, wie Module, Datenflüsse und externe Systeme ineinandergreifen, und bildet damit das Gerüst für Wartung, Weiterentwicklung und Sicherheitsbewertungen. Ohne dokumentierte Architektur könnte eine Institution nach Jahren vor der Situation stehen, dass nur einzelne Entwickler den Aufbau verstehen, was den Wissenstransfer erschwert und bei Personalwechseln erhebliche Risiken birgt. Eine unklare oder fehlende Dokumentation könnte zudem dazu führen, dass Abhängigkeiten von proprietären Technologien übersehen werden, wodurch sich ein Vendor Lock-in entwickelt, der die Institution langfristig bindet. Umgekehrt kann eine nachvollziehbare Architektur Dokumentation sicherstellen, dass Schwachstellenanalysen effizient durchgeführt werden, dass Sicherheitslücken frühzeitig erkannt werden und dass neue Entwickler schneller eingearbeitet werden können. Zur Umsetzung der Anforderung kann eine Institution standardisierte Diagrammtypen wie UML oder C4 einsetzen, um Abhängigkeiten und Schnittstellen verständlich abzubilden. Hilfreich kann es sein, die Architektur in mehreren Sichten zu dokumentieren, etwa eine logische Sicht (Funktionen und Module), eine technologische Sicht (Server, Container, Frameworks) und eine sicherheitsrelevante Sicht (z. B. Trust Boundaries). Die Dokumentation kann in Versionskontrollsystemen wie Git gepflegt werden, sodass Änderungen an Architekturentscheidungen nachvollziehbar bleiben. Ergänzend kann es praktikabel sein, automatisierte Werkzeuge einzusetzen, die Code-Strukturen analysieren und Diagramme generieren, wodurch Konsistenz zwischen Dokumentation und Implementierung unterstützt werden kann.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 79eb639b-25ed-4ce3-9d8f-c57b573c1ee3 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 79eb639b-25ed-4ce3-9d8f-c57b573c1ee3 |
