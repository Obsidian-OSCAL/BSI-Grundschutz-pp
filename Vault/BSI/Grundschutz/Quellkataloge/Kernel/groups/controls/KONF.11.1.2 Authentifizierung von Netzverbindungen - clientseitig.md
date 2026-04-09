---
tags: Produktbeschreibung_Zero_Trust
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.11.1.2 Authentifizierung von Netzverbindungen - clientseitig
parent_control: KONF.11.1 Authentifizierung vor dem Zugriff
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.11.1.2 - Authentifizierung von Netzverbindungen - clientseitig
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)" "[Zero Trust](tags_Zero Trust)"
Gruppe: [KONF.11 Vertrauensbeziehungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.11%20Vertrauensbeziehungen.md)
---

** Übergeordnetes Control: ** [KONF.11.1 Authentifizierung vor dem Zugriff](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.11.1%20Authentifizierung%20vor%20dem%20Zugriff.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Vertrauensbeziehungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.11%20Vertrauensbeziehungen.md) *** | Anwendungen | SOLLTE | die Gegenstelle vor dem Datenaustausch | im Einklang mit den zugehörigen Anforderungen zum Identitäts- und Berechtigungsmanagement | authentifizieren | Konfigurationshistorie | >Konfiguration für Anwendungen SOLLTE die Gegenstelle vor dem Datenaustausch im Einklang mit den zugehörigen Anforderungen zum Identitäts- und Berechtigungsmanagement authentifizieren.

> [!info]- Guidance
>Stellt eine Anwendung Anfragen über das Netz oder nimmt eine Anwendung Anfragen über das Netz entgegen, so gewährleistet eine gegenseitige Authentifizierung der Kommunikationspartner (mutual authentication), dass diese autorisiert ist Anfragen zu stellen oder zu beantworten. Eine gängige Lösung ist die Prüfung von X.509-Zertifikaten beim Verbindungaufbau mit TLS. Für die Umsetzung ist es nicht unbedingt erforderlich, dass sich die Gegenstelle bei jeder Anfrage/Abruf erneut authentifiziert, wenn bei der Authentifizierung eine sichere Verbindung per TLS aufgebaut wird. Mit Anfragen sind alle Zugriffe gemeint, sei es über eine Web-URL oder eigene API. Die Formulierung "im Einklang mit den zugehörigen Anforderungen zum Identitäts- und Berechtigungsmanagement" bedeutet, dass die Authentifizierung so erfolgt, wie in der Praktik Berechtigung (BER) festgelegt. Hierzu gehört insbesondere die Verwendung aktueller kryptographischer Verfahren, wie sie im Thema Kryptographie zu finden ist. Hierzu gehört insbesondere die Verwendung aktueller kryptographischer Verfahren, wie sie im Thema Kryptographie zu finden ist. Für lesende Zugriffe auf unkritische, öffentliche Daten ist die Authentifizierung der lesenden Anwendung entbehrlich.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 7bf1392f-5c43-43da-bb36-498b8a678e28 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | 7bf1392f-5c43-43da-bb36-498b8a678e28 |

> [!info]- Links> > related: [BER.1.1 Verfahren und Regelungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/BER.1.1%20Verfahren%20und%20Regelungen.md)
