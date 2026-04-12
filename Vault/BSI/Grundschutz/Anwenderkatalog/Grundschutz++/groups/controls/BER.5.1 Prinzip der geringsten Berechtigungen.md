---
tags:
- security_by_default_privilegierte_rechte
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.5.1 Prinzip der geringsten Berechtigungen
stmt_modal_verb: SOLLTE
stmt_action_word: einschränken
stmt_documentation: Inventar Berechtigungen
control_effort_level: '1'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.5.1 - Prinzip der geringsten Berechtigungen
> [!example]- Tags:> [[tags_Security by Default|Security by Default]]> [[tags_Privilegierte Rechte|Privilegierte Rechte]]
Gruppe: [BER.5 Berechtigungsmanagement](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.5%20Berechtigungsmanagement.md)
---

> [!example]- Untergeordnete Controls
> [BER.5.1.1 Rollenbasierte Berechtigung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/BER.5.1.1%20Rollenbasierte%20Berechtigung.md)> [BER.5.1.2 JIT‑/JEA‑Berechtigungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/BER.5.1.2%20JIT--JEA-Berechtigungen.md)### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Berechtigung (BER)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER%20Berechtigung.md)*<br> *  &rarr; [Berechtigungsmanagement](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.5%20Berechtigungsmanagement.md) *</div> | [Berechtigung](practices_Berechtigung_389cd5ad-fb81-4a95-8f7a-8f1fe1881709) |  | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | die Vergabe von Berechtigungen nach dem Prinzip der geringsten Berechtigungen |  | [einschränken](action_words_einschränken_c8289ac3-7877-4224-b43b-08e005e461ad) | [Inventar Berechtigungen](documentation_guidelines_Inventar Berechtigungen) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Berechtigung SOLLTE die Vergabe von Berechtigungen nach dem Prinzip der geringsten Berechtigungen einschränken.</span>

> [!info]- Guidance
>Das Prinzip der geringsten Berechtigungen, im Englischen als Principle of Least Privilege (PoLP) bekannt, besagt, dass Nutzende, Prozesse oder Systeme nur die minimal notwendigen Zugriffsrechte erhalten dürfen, um die ihnen jeweils zugewiesenen Aufgaben zu erfüllen. Dies dient primär der Minimierung der Angriffsfläche und der Begrenzung potenzieller Schäden. Sollte beispielsweise ein Zugangskonto durch Phishing kompromittiert werden, könnte ein Angreifer ohne dieses Prinzip weitreichenden Zugriff auf kritische Daten oder Systeme erlangen und diese manipulieren, exfiltrieren oder verschlüsseln. Die konsequente Anwendung dieses Grundsatzes kann die Ausbreitung von Schadsoftware nach einem ersten Eindringen erheblich erschweren und sicherstellen, dass Mitarbeitende nur jene Informationen einsehen, die für ihre Tätigkeit unmittelbar relevant sind. Hierdurch wird auch das Risiko von Datendiebstahl durch Innentäter reduziert. Es empfiehlt sich als Ergänzung hier auch das "Need to know"-Prinzip zu betrachten, da sich beide Prinzipien ergänzen. Während das "Least Privilege"-Prinzip auf Systremrechte, Rollen und Berechtigungen fokussiert, liegt der Fokus des "Need to know"-Prinzips mehr auf Informationen und Datenzugriff. Zur sinnvollen Umsetzung kann die Institution ein rollenbasiertes Berechtigungskonzept (Role-Based Access Control, RBAC) etablieren, bei dem Berechtigungen nicht an einzelne Personen, sondern an vordefinierte Rollen (z.B. "Finanzbuchhaltung" oder "Netzwerkadministrator") gebunden werden. Für die Einführung in eine bestehende Umgebung kann ein gestuftes Vorgehen gewählt werden: (1) Zunächst wird ein Überwachungsmodus ("Audit-Only") aktiviert, der protokolliert, welche Zugriffe durch eine strengere Richtlinie verweigert würden, ohne sie tatsächlich zu blockieren. (2) Anschließend werden diese Protokolle analysiert, um legitime, für den Geschäftsbetrieb notwendige Zugriffe zu identifizieren und diese gezielt in die jeweiligen Rollen und Berechtigungsgruppen aufzunehmen. (3) Erst wenn keine legitimen Zugriffe mehr in den Protokollen als "verweigert" auftauchen, wird die Richtlinie scharf geschaltet und blockiert aktiv alle nicht explizit erlaubten Zugriffe. Alle relevanten Anforderungen zur Vergabe von Berechtigungen können mit den Handlungsworten "authentifizieren", "autorisieren" und "einschränken" gefunden werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 0e1f4190-44ad-48f0-9504-781aef585ba0 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [1](effort_level_1) |> | ** Alternate Identifier ** | 0e1f4190-44ad-48f0-9504-781aef585ba0 |
