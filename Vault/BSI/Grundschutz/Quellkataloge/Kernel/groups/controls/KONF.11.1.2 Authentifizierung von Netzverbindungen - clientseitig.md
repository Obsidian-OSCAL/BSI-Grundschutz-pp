---
tags:
- produktbeschreibung_zero_trust
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.11.1.2 Authentifizierung von Netzverbindungen - clientseitig
parent_control: KONF.11.1 Authentifizierung vor dem Zugriff
stmt_target_object_category: Anwendungen
stmt_modal_verb: SOLLTE
stmt_action_word: authentifizieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '2'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.11.1.2 - Authentifizierung von Netzverbindungen - clientseitig
> [!example]- Tags:> [[tags_Produktbeschreibung|Produktbeschreibung]]> [[tags_Zero_Trust|Zero Trust]]
Gruppe: [KONF.11 Vertrauensbeziehungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.11%20Vertrauensbeziehungen.md)
---

** Übergeordnetes Control: ** [KONF.11.1 Authentifizierung vor dem Zugriff](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.11.1%20Authentifizierung%20vor%20dem%20Zugriff.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Vertrauensbeziehungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.11%20Vertrauensbeziehungen.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [Anwendungen](target_object_categories_Anwendungen_7e41ecf5-1831-4691-ad0c-4fc7bbc1b871) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | die Gegenstelle vor dem Datenaustausch | im Einklang mit den zugehörigen Anforderungen zum Identitäts- und Berechtigungsmanagement | [authentifizieren](action_words_authentifizieren_8e423108-c6dd-41fd-8104-e9221bd9d085) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für Anwendungen SOLLTE die Gegenstelle vor dem Datenaustausch im Einklang mit den zugehörigen Anforderungen zum Identitäts- und Berechtigungsmanagement authentifizieren.</span>

> [!info]- Guidance
>Stellt eine Anwendung Anfragen über das Netz oder nimmt eine Anwendung Anfragen über das Netz entgegen, so gewährleistet eine gegenseitige Authentifizierung der Kommunikationspartner (mutual authentication), dass diese autorisiert ist Anfragen zu stellen oder zu beantworten. Eine gängige Lösung ist die Prüfung von X.509-Zertifikaten beim Verbindungaufbau mit TLS. Für die Umsetzung ist es nicht unbedingt erforderlich, dass sich die Gegenstelle bei jeder Anfrage/Abruf erneut authentifiziert, wenn bei der Authentifizierung eine sichere Verbindung per TLS aufgebaut wird. Mit Anfragen sind alle Zugriffe gemeint, sei es über eine Web-URL oder eigene API. Die Formulierung "im Einklang mit den zugehörigen Anforderungen zum Identitäts- und Berechtigungsmanagement" bedeutet, dass die Authentifizierung so erfolgt, wie in der Praktik Berechtigung (BER) festgelegt. Hierzu gehört insbesondere die Verwendung aktueller kryptographischer Verfahren, wie sie im Thema Kryptographie zu finden ist. Hierzu gehört insbesondere die Verwendung aktueller kryptographischer Verfahren, wie sie im Thema Kryptographie zu finden ist. Für lesende Zugriffe auf unkritische, öffentliche Daten ist die Authentifizierung der lesenden Anwendung entbehrlich.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 7bf1392f-5c43-43da-bb36-498b8a678e28 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | 7bf1392f-5c43-43da-bb36-498b8a678e28 |

> [!info]- Links> > related: [BER.1.1 Verfahren und Regelungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/BER.1.1%20Verfahren%20und%20Regelungen.md)
