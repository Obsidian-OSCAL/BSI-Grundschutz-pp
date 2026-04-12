---
tags:
- inventories
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: ASST.2.3 Inventar der Anwendungen
stmt_modal_verb: SOLLTE
stmt_action_word: dokumentieren
stmt_documentation: Inventar Anwendungen
control_effort_level: '2'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ASST.2.3 - Inventar der Anwendungen
Tag: [[tags_Inventories|Inventories]]
Gruppe: [ASST.2 Inventarisierung](BSI/Grundschutz/Quellkataloge/Kernel/groups/ASST.2%20Inventarisierung.md)
---

> [!example]- Untergeordnete Controls
> [ASST.2.3.1 Autorisierung von Anwendungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/ASST.2.3.1%20Autorisierung%20von%20Anwendungen.md)> [ASST.2.3.2 Software Bill of Materials (SBOM)](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/ASST.2.3.2%20Software%20Bill%20of%20Materials%20(SBOM).md)### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Informationen und Assets (ASST)](BSI/Grundschutz/Quellkataloge/Kernel/groups/ASST%20Informationen%20und%20Assets.md)*<br> *  &rarr; [Inventarisierung](BSI/Grundschutz/Quellkataloge/Kernel/groups/ASST.2%20Inventarisierung.md) *</div> | [Informationen und Assets](practices_Informationen und Assets_02088622-573d-4225-883c-9afe0c7dc69b) |  | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | ein Inventar der Anwendungen | einschließlich Produktname, Versionsstand, Herkunft und Lizenzierung | [dokumentieren](action_words_dokumentieren_1ed72769-e05f-4a97-ad2e-99a70f1480e8) | [Inventar Anwendungen](documentation_guidelines_Inventar Anwendungen) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Informationen und Assets SOLLTE ein Inventar der Anwendungen einschließlich Produktname, Versionsstand, Herkunft und Lizenzierung dokumentieren.</span>

> [!info]- Guidance
>Ein zentrales Inventar der Anwendungen, oft auch als Application Inventory oder Teil des Software Asset Management (SAM) bezeichnet, dient als grundlegende, strukturierte Übersicht aller in der Institution eingesetzten Applikationen. Relevant sind dabei sowohl lokal installierte Anwendungen, als auch solche, die auf Cloud-Servern oder in verteilten Diensten betrieben werden. Hierbei beschreibt die Herkunft nicht nur den Hersteller, sondern auch den Lieferanten oder die Bezugsquelle, um die Vertrauenswürdigkeit bewerten zu können. Die Lizensierung erfasst die rechtliche Grundlage für die Nutzung, einschließlich des Lizenzmodells (z.B. pro Benutzer, pro Gerät, Abonnement), der Anzahl erworbener Lizenzen und deren Gültigkeitsdauer. Häufig sind weitere Angaben sinnvoll, z.B. Beschaffungs- und Installationszeitpunkt, URL, App-Store, Schnittstellen wie z.B. Cloud-APIs oder Datenexporte in andere Anwendungen, auch auf Dateiserver. Ohne eine solche Übersicht könnte die Institution unwissentlich Software mit bekannten, kritischen Schwachstellen einsetzen oder durch den Einsatz nicht lizenzierter Produkte hohe finanzielle und rechtliche Risiken eingehen. Ein gepflegtes Inventar kann hingegen bei neuen Sicherheitswarnungen eine schnelle Auswirkungsanalyse ermöglichen. Zur praktischen Umsetzung kann die Institution eine zentrale Liste, beispielsweise in einer Datenbank oder einem spezialisierten SAM-Tool, aufbauen, die durch verschiedene Quellen gespeist wird. Eine automatisierte Erfassung kann durch technische Werkzeuge erfolgen, wie zum Beispiel durch (1) Netzwerks-Scanner, die installierte Applikationen auf Endgeräten identifizieren, (2) Agenten-basierte Systeme, die kontinuierlich Software-Änderungen melden, oder (3) die Auswertung von Daten aus zentralen Software-Verteilungssystemen. Die Dokumentation kann auch durch eine Liste mit Verweisen umgesetzt werden (z.B. auf die Lizendateien und Schnittstellenkonfiguration).

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | d55d7e49-436e-4783-9ad0-5f92619da743 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | d55d7e49-436e-4783-9ad0-5f92619da743 |
