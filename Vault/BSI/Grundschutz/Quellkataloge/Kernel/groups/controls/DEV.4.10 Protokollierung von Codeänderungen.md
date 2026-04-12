---
tags:
- change_management
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: DEV.4.10 Protokollierung von Codeänderungen
stmt_target_object_category: Anwendungen
stmt_modal_verb: SOLLTE
stmt_action_word: protokollieren
stmt_documentation: Codehistorie
control_effort_level: '1'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DEV.4.10 - Protokollierung von Codeänderungen
Tag: [[tags_Change_Management|Change Management]]
Gruppe: [DEV.4 Softwareentwicklung - Code](BSI/Grundschutz/Quellkataloge/Kernel/groups/DEV.4%20Softwareentwicklung%20-%20Code.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Entwicklung (DEV)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DEV%20Entwicklung.md)*<br> *  &rarr; [Softwareentwicklung - Code](BSI/Grundschutz/Quellkataloge/Kernel/groups/DEV.4%20Softwareentwicklung%20-%20Code.md) *</div> | [Entwicklung](practices_Entwicklung_108b65aa-5964-49d7-b9eb-dc8946a923ca) | [Anwendungen](target_object_categories_Anwendungen_7e41ecf5-1831-4691-ad0c-4fc7bbc1b871) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | Änderungen am Quellcode | einschließlich Zeitpunkt, Inhalt der Änderung, ändernder Person und der Begründung der Änderung | [protokollieren](action_words_protokollieren_fe0c8466-8c0d-450b-a649-02c11e0231f8) | [Codehistorie](documentation_guidelines_Codehistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Entwicklung für Anwendungen SOLLTE Änderungen am Quellcode einschließlich Zeitpunkt, Inhalt der Änderung, ändernder Person und der Begründung der Änderung protokollieren.</span>

> [!info]- Guidance
>Im Kontext dieser Anforderung bezeichnet Quellcode den in einer Programmiersprache geschriebenen, von Menschen lesbaren Anteil einer Anwendung, während eine Änderung jede Anpassung, Ergänzung oder Entfernung dieses Codes umfasst. Unter Begründung ist die dokumentierte fachliche oder technische Motivation zu verstehen, die erläutert, warum eine Änderung notwendig war, beispielsweise zur Fehlerbehebung, Funktionserweiterung oder Verbesserung der Sicherheit. Der Zeitpunkt entspricht dabei einem präzisen Zeitstempel, der eine eindeutige zeitliche Nachvollziehbarkeit erlaubt, und die ändernde Person ist diejenige, die die Modifikation fachlich veranlasst oder technisch durchgeführt hat – nicht zwingend dieselbe Rolle wie ein Freigebender oder Reviewer. Die Protokollierung kann verhindern, dass unautorisierte oder fehlerhafte Anpassungen unentdeckt bleiben, und sie kann im Streitfall eine klare Nachvollziehbarkeit bieten. Ohne diese Nachweise könnte es zu unklaren Verantwortlichkeiten, erhöhtem Manipulationsrisiko oder schwer nachvollziehbaren Fehlfunktionen kommen. Eine Institution kann diese Anforderung durch Nutzung von Versionsverwaltungssystemen wie Git oder Subversion umsetzen, indem sie für jede Änderung standardisierte Commit-Meldungen mit Zeitstempel, Autor und Begründung erzwingt. Ergänzend kann ein Workflow etabliert werden, bei dem Änderungen erst nach einem Merge- oder Pull-Request mit dokumentierter Beschreibung in den Hauptzweig gelangen. Sinnvoll ist es zudem, einfache Vorlagen oder Textbausteine für Begründungen bereitzustellen, sodass Änderungen einheitlich und vollständig erklärt werden können. Für Transparenz kann zusätzlich ein automatisches Änderungsprotokoll generiert werden, das regelmäßig exportiert oder archiviert wird, um auch ohne Zugriff auf das Versionsverwaltungssystem auswertbar zu bleiben.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | e2458854-ad5a-433f-896c-e3eef23b6952 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [1](effort_level_1) |> | ** Alternate Identifier ** | e2458854-ad5a-433f-896c-e3eef23b6952 |
