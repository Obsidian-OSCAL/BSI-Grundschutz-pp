---
tags:
- credential_stuffing_privilege_escalation_password_policy
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.6.6 Blockieren von Passwort Recycling
stmt_target_object_category: Nutzende
stmt_modal_verb: SOLLTE
stmt_action_word: blockieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.6.6 - Blockieren von Passwort Recycling
> [!example]- Tags:> [[tags_Credential Stuffing|Credential Stuffing]]> [[tags_Privilege Escalation|Privilege Escalation]]> [[tags_Password Policy|Password Policy]]
Gruppe: [BER.6 Passwortgebrauch](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.6%20Passwortgebrauch.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Berechtigung (BER)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER%20Berechtigung.md)*<br> *  &rarr; [Passwortgebrauch](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.6%20Passwortgebrauch.md) *</div> | [Berechtigung](practices_Berechtigung_389cd5ad-fb81-4a95-8f7a-8f1fe1881709) | [Nutzende](target_object_categories_Nutzende_38125c38-8895-493c-ba73-77ac1029d02d) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | die Wiederverwendung von Passwörtern |  | [blockieren](action_words_blockieren_2abccead-8fc1-4f04-af4b-8c5ff796bd67) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Berechtigung für Nutzende SOLLTE die Wiederverwendung von Passwörtern blockieren.</span>

> [!info]- Guidance
>Die Wiederverwendung von Passwörtern („password reuse“) ist die Nutzung identischer oder bereits früher verwendeter Passwörter für verschiedene Konten, Systeme oder aufeinanderfolgende Authentifizierungsvorgänge. Die Blockierung der Passwortwiederverwendung bedeutet hier, dass das Berechtigungsmanagementsystem („access management system“) technisch verhindert, dass ein neues Passwort mit einem zuvor verwendeten identisch ist oder einer vordefinierten Anzahl früherer Passwörter entspricht. Dies könnte nicht nur bei Wiederverwendung einer Person problematisch sein, sondern auch bei einer systemübergreifenden Fehlkonfiguration: Ein typisches Szenario wäre, dass in einer Institution mehrere Arbeitsplatzrechner mit identischen lokalen Administratorpasswörtern konfiguriert sind („local admin password reuse“). Wird ein einzelner Rechner durch Schadsoftware oder physischen Zugriff kompromittiert, könnte ein Angreifer dieses Passwort anschließend nutzen, um sich mit denselben Anmeldeinformationen lateral auf weitere Systeme auszubreiten. Die Wiederverwendung des lokalen Administratorpassworts könnte somit eine vollständige Kompromittierung der internen IT-Infrastruktur ermöglichen. Diese Anforderung adressiert den Schutz vor solchen Angriffen, die sich aus der Wiederverwendung kompromittierter Anmeldeinformationen ergeben könnten, etwa durch Credential-Stuffing oder Brute-Force-Angriffe auf bekannte Passwortmuster. Blockieren kann das Risiko verringern, dass ein Angreifer durch bekannte Passwörter unbefugten Zugang zu Konten erhält. Hierzu können zum einen eine lokale Passworthistorie oder zum anderen elektronische Passwortmanager genutzt werden, die unabhängige sichere Passwörter generieren, wo die Wahrscheinlichkeit einer Passwortwiederholung ausgeschlossen werden kann.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | d7c76736-0c1d-4693-92d5-894a8b740204 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | d7c76736-0c1d-4693-92d5-894a8b740204 |
