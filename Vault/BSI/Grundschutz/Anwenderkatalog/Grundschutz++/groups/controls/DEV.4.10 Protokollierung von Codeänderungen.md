---
tags: Change_Management
class: BSI-Stand-der-Technik-Kernel
type: control
control: DEV.4.10 Protokollierung von Codeänderungen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DEV.4.10 - Protokollierung von Codeänderungen
Tags: "[Change Management](tags_Change Management)"
Gruppe: [DEV.4 Softwareentwicklung - Code](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DEV.4%20Softwareentwicklung%20-%20Code.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Entwicklung (DEV)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DEV%20Entwicklung.md)**<br> ***  &rarr; [Softwareentwicklung - Code](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DEV.4%20Softwareentwicklung%20-%20Code.md) *** | Anwendungen | SOLLTE | Änderungen am Quellcode | einschließlich Zeitpunkt, Inhalt der Änderung, ändernder Person und der Begründung der Änderung | protokollieren | Codehistorie | >Entwicklung für Anwendungen SOLLTE Änderungen am Quellcode einschließlich Zeitpunkt, Inhalt der Änderung, ändernder Person und der Begründung der Änderung protokollieren.

> [!info]- Guidance
>Im Kontext dieser Anforderung bezeichnet Quellcode den in einer Programmiersprache geschriebenen, von Menschen lesbaren Anteil einer Anwendung, während eine Änderung jede Anpassung, Ergänzung oder Entfernung dieses Codes umfasst. Unter Begründung ist die dokumentierte fachliche oder technische Motivation zu verstehen, die erläutert, warum eine Änderung notwendig war, beispielsweise zur Fehlerbehebung, Funktionserweiterung oder Verbesserung der Sicherheit. Der Zeitpunkt entspricht dabei einem präzisen Zeitstempel, der eine eindeutige zeitliche Nachvollziehbarkeit erlaubt, und die ändernde Person ist diejenige, die die Modifikation fachlich veranlasst oder technisch durchgeführt hat – nicht zwingend dieselbe Rolle wie ein Freigebender oder Reviewer. Die Protokollierung kann verhindern, dass unautorisierte oder fehlerhafte Anpassungen unentdeckt bleiben, und sie kann im Streitfall eine klare Nachvollziehbarkeit bieten. Ohne diese Nachweise könnte es zu unklaren Verantwortlichkeiten, erhöhtem Manipulationsrisiko oder schwer nachvollziehbaren Fehlfunktionen kommen. Eine Institution kann diese Anforderung durch Nutzung von Versionsverwaltungssystemen wie Git oder Subversion umsetzen, indem sie für jede Änderung standardisierte Commit-Meldungen mit Zeitstempel, Autor und Begründung erzwingt. Ergänzend kann ein Workflow etabliert werden, bei dem Änderungen erst nach einem Merge- oder Pull-Request mit dokumentierter Beschreibung in den Hauptzweig gelangen. Sinnvoll ist es zudem, einfache Vorlagen oder Textbausteine für Begründungen bereitzustellen, sodass Änderungen einheitlich und vollständig erklärt werden können. Für Transparenz kann zusätzlich ein automatisches Änderungsprotokoll generiert werden, das regelmäßig exportiert oder archiviert wird, um auch ohne Zugriff auf das Versionsverwaltungssystem auswertbar zu bleiben.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | e2458854-ad5a-433f-896c-e3eef23b6952 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [1](effort_level_1) |> | ** Alternate Identifier ** | e2458854-ad5a-433f-896c-e3eef23b6952 |
